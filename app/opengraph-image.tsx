import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at 20% 20%, #27272a 0%, #18181b 40%, #09090b 100%)",
          color: "#fafafa",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          Mind AI Inc.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              maxWidth: 980,
              fontFamily: "Georgia, serif",
            }}
          >
            The intelligence layer for physical operations.
          </div>
          <div style={{ fontSize: 28, color: "#d4d4d8", maxWidth: 980 }}>
            Parent platform behind navNote. Agentic, context-aware, always-on execution
            intelligence.
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#e4e4e7" }}>www.mind-inc.io</div>
      </div>
    ),
    size,
  );
}
