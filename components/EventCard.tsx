"use client";

import { useState } from "react";

export default function EventCard({ title, description, image }: { title: string; description: string; image?: string }) {
    const [hovered, setHovered] = useState(false);

    return (
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
                maxWidth: "396px",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                boxShadow: hovered
                    ? "0 0 15px rgba(55,255,0,0.25), 0 0 30px rgba(55,255,0,0.10), inset 0 0 15px rgba(55,255,0,0.05)"
                    : "none",
                cursor: "pointer",
            }}
        >
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
    );
}
