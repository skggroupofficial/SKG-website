import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shri Kuber Group — The Power of Trust";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#2C1C10",
          padding: "72px 80px",
          color: "#F4EFE4",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(226,210,172,0.07) 0 1px, transparent 1px 30px), repeating-linear-gradient(-45deg, rgba(226,210,172,0.07) 0 1px, transparent 1px 30px)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#CBA968" }}>
          <span style={{ display: "flex" }}>Shri Kuber Group</span>
          <span style={{ display: "flex" }}>Hanumangarh · Rajasthan</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 150, fontWeight: 800, letterSpacing: -2, lineHeight: 1, color: "#F8F4EC" }}>
            SKG
            <span style={{ display: "flex", marginLeft: 28, fontSize: 60, color: "#A07830" }}>✦</span>
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 46, color: "#C7B9A6" }}>
            Develop · Build · Host
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", width: 90, height: 3, background: "#A07830", marginBottom: 20 }} />
            <div style={{ display: "flex", fontSize: 38, color: "#F4EFE4" }}>The Power of Trust</div>
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#897764" }}>
            skggroup.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
