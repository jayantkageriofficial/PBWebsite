import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <>
      <section
        id="home"
        style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
        className="relative min-h-screen overflow-hidden"
      >
        <ThreeBackground />
        {/* page content goes here, sits above the canvas */}
      </section>
    </>
  );
}
