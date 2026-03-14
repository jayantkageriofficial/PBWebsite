"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const UNIT = 14.4; // world units per key
const GAP = 0.35; // visual gap between blocks
const KEY_H = UNIT - GAP; // cube: thickness matches width/depth
const LIFT = 5.5; // max hover elevation
const BASE_SPREAD = 1.2; // random height spread in base state

const NEON = 0x37ff00;

// Ripple table - index = rounded Euclidean distance from hovered key
const RIPPLE_LIFT = [LIFT, LIFT * 0.55, LIFT * 0.28, LIFT * 0.1];
const RIPPLE_OPACITY = [1.0, 0.75, 0.42, 0.16];
const MAX_RIPPLE = RIPPLE_LIFT.length - 1;

interface Key {
  group: THREE.Group;
  edgeMat: THREE.LineBasicMaterial;
  haloMat: THREE.LineBasicMaterial;
  row: number;
  col: number;
  y: number;
  baseY: number;
  targetY: number;
  opacity: number;
  targetOpacity: number;
}

export default function ThreeBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const W0 = container.clientWidth || window.innerWidth;
    const H0 = container.clientHeight || window.innerHeight;
    const asp = W0 / H0;

    // Frustum - locked to the original 22×8 key density
    // This preserves exactly the same box size on screen as the original.
    const REF_KBW = 22 * UNIT; // 26.4
    const REF_KBD = 8 * UNIT; //  9.6

    const computeFrustum = (a: number) => {
      const hw = (REF_KBW + REF_KBD) / (2 * Math.SQRT2);
      const hh =
        (REF_KBW + REF_KBD) / (2 * Math.sqrt(6)) +
        (LIFT + KEY_H) * (2 / Math.sqrt(6)) +
        1.0;
      const viewH = Math.max(hw / a, hh) * 1.12;
      return { viewH, viewW: viewH * a };
    };

    const { viewH, viewW } = computeFrustum(asp);

    // Compute grid size to cover every viewport corner
    // Under isometric projection the screen corner (±viewW, ±viewH) maps to
    // world XZ:  x = (±vW·√2 ± vH·√6)/2,  z = (∓vW·√2 ± vH·√6)/2
    // The farthest required reach in X or Z is (vW·√2 + vH·√6)/2.
    // Camera is at (1,1,1) so X and Z spread are equal → COLS = ROWS.
    const maxExtent = (viewW * Math.SQRT2 + viewH * Math.sqrt(6)) / 2;
    const COLS = Math.ceil((maxExtent * 2) / UNIT) + 2;
    const ROWS = COLS;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x414141);

    // Build key grid
    const KBW = COLS * UNIT;
    const KBD = ROWS * UNIT;
    const keys: Key[] = [];

    const solidMat = new THREE.MeshBasicMaterial({ color: 0x414141 });

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const kw = UNIT - GAP;
        const kd = UNIT - GAP;
        const geo = new THREE.BoxGeometry(kw, KEY_H, kd);

        const mesh = new THREE.Mesh(geo, solidMat);

        // NEON hover outline — invisible until hovered
        const edgeMat = new THREE.LineBasicMaterial({
          color: NEON,
          transparent: true,
          opacity: 0,
        });
        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          edgeMat,
        );

        // Soft glow halo on the directly hovered key
        const haloGeo = new THREE.BoxGeometry(
          kw + 0.08,
          KEY_H + 0.08,
          kd + 0.08,
        );
        const haloMat = new THREE.LineBasicMaterial({
          color: NEON,
          transparent: true,
          opacity: 0,
        });
        const halo = new THREE.LineSegments(
          new THREE.EdgesGeometry(haloGeo),
          haloMat,
        );

        const group = new THREE.Group();
        group.add(mesh, edges, halo);

        const px = -KBW / 2 + (c + 0.5) * UNIT;
        const pz = -KBD / 2 + (r + 0.5) * UNIT;
        const baseY = KEY_H / 2 + Math.random() * BASE_SPREAD;
        group.position.set(px, baseY, pz);
        scene.add(group);

        keys.push({
          group,
          edgeMat,
          haloMat,
          row: r,
          col: c,
          y: baseY,
          baseY,
          targetY: baseY,
          opacity: 0,
          targetOpacity: 0,
        });
      }
    }

    // Single flat hit-plane covering the whole grid
    const hitPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(KBW + UNIT * 2, KBD + UNIT * 2),
      new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide }),
    );
    hitPlane.rotation.x = -Math.PI / 2;
    hitPlane.position.y = KEY_H / 2;
    scene.add(hitPlane);

    // Isometric orthographic camera (same frustum as original)
    const camera = new THREE.OrthographicCamera(
      -viewW,
      viewW,
      viewH,
      -viewH,
      -100,
      100,
    );
    camera.position.set(1, 1, 1);
    camera.position.normalize();
    camera.position.multiplyScalar(60);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(W0, H0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Raycasting helpers
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-9, -9);

    const screenToNDC = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.set(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1,
      );
    };

    const hitPointToKey = (point: THREE.Vector3): Key | null => {
      const col = Math.floor((point.x + KBW / 2) / UNIT);
      const row = Math.floor((point.z + KBD / 2) / UNIT);
      if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return null;
      return keys[row * COLS + col];
    };

    let hovKey: Key | null = null;

    const onMove = (e: MouseEvent) => screenToNDC(e.clientX, e.clientY);
    window.addEventListener("mousemove", onMove);

    // Resize via ResizeObserver
    const resizeObs = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      const a = width / height;
      const { viewH: vh, viewW: vw } = computeFrustum(a);
      const cam = camera as THREE.OrthographicCamera;
      cam.left = -vw;
      cam.right = vw;
      cam.top = vh;
      cam.bottom = -vh;
      cam.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObs.observe(container);

    // Target updater
    const setTargets = (hov: Key | null) => {
      keys.forEach((k) => {
        if (!hov) {
          k.targetY = k.baseY;
          k.targetOpacity = 0;
          k.haloMat.opacity = 0;
          return;
        }
        const dist = Math.round(
          Math.sqrt((k.row - hov.row) ** 2 + (k.col - hov.col) ** 2),
        );
        if (dist <= MAX_RIPPLE) {
          k.targetY = k.baseY + RIPPLE_LIFT[dist];
          k.targetOpacity = RIPPLE_OPACITY[dist];
          k.haloMat.opacity = dist === 0 ? 0.4 : 0;
        } else {
          k.targetY = k.baseY;
          k.targetOpacity = 0;
          k.haloMat.opacity = 0;
        }
      });
    };

    // Animation loop
    let raf: number;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObject(hitPlane, false);
      const newHov = hits.length ? hitPointToKey(hits[0].point) : null;

      if (newHov !== hovKey) {
        hovKey = newHov;
        setTargets(hovKey);
      }

      // Smooth lerp - same constants as original
      keys.forEach((k) => {
        const ps = k.targetY > k.y ? 0.14 : 0.09;
        k.y += (k.targetY - k.y) * ps;
        k.group.position.y = k.y;

        k.opacity += (k.targetOpacity - k.opacity) * 0.11;
        k.edgeMat.opacity = k.opacity;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      resizeObs.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0 cursor-grab bg-bggray" />
  );
}
