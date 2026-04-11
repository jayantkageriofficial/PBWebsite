"use client";

import { useState } from "react";

export default function EventCard({ 
    title, description, image, isFlipped, onToggle 
}: { 
    title: string; description: string; image?: string;
    isFlipped?: boolean; onToggle?: () => void; 
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div style={{ perspective: "1000px", maxWidth: "396px", cursor: "pointer", position: "relative" }} onClick={onToggle}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    backgroundColor: "#111",
                    borderRadius: "20px",
                    border: hovered ? "1px solid rgba(55,255,0,0.5)" : "1px solid transparent",
                    padding: "9px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    transition: "transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    boxShadow: hovered && !isFlipped
                        ? "0 0 15px rgba(55,255,0,0.25), 0 0 30px rgba(55,255,0,0.10), inset 0 0 15px rgba(55,255,0,0.05)"
                        : "none",
                    height: "100%",
                }}
            >
                {/* Front */}
                <div style={{ backfaceVisibility: "hidden", display: "flex", flexDirection: "column", gap: "8px", height: "100%" }}>
                    {/* Image area */}
                    <div
                        style={{
                            borderRadius: "14px",
                            overflow: "hidden",
                            backgroundColor: "#222",
                            width: "100%",
                            aspectRatio: "4/3",
                            position: "relative",
                        }}
                    >
                        {image && (
                            <img
                                src={image}
                                alt={title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        )}
                    </div>

                    {/* Text */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "4px 6px 6px" }}>
                        <span
                            style={{
                                fontFamily: "'Lexend', sans-serif",
                                fontSize: "28px",
                                fontWeight: 500,
                                lineHeight: "140%",
                                letterSpacing: "0%",
                                verticalAlign: "middle",
                                background: "linear-gradient(135deg, #37FF00, #37FF00)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {title}
                        </span>
                        <span
                            style={{
                                fontFamily: "'Lexend', sans-serif",
                                fontSize: "14px",
                                fontWeight: 400,
                                lineHeight: "140%",
                                letterSpacing: "0%",
                                color: "rgba(255,255,255,0.65)",
                            }}
                        >
                            {description}
                        </span>
                    </div>
                </div>

                {/* Back */}
                <div style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    backgroundColor: "#111",
                    borderRadius: "20px",
                }}>
                    <span
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            fontSize: "24px",
                            fontWeight: 500,
                            lineHeight: "140%",
                            color: "#37FF00",
                        }}
                    >
                        {title}
                    </span>
                    <div style={{ fontFamily: "'Lexend', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                        <strong>Date:</strong> 15th August 2024
                    </div>
                    <div style={{ fontFamily: "'Lexend', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                        <strong>Location:</strong> Main Auditorium
                    </div>
                    <p style={{ fontFamily: "'Lexend', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: "1.5", marginTop: "8px", overflowY: "auto" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}
