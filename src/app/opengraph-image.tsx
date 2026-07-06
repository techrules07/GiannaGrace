import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1c1917 0%, #44403c 100%)",
          color: "#fafaf9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "#b45309",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          G
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, color: "#d6d3d1", marginTop: 16 }}>
          {`Android Apps · ${siteConfig.domain}`}
        </div>
      </div>
    ),
    size,
  );
}
