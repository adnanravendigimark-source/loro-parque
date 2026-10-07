import { ImageResponse } from "next/og";

export const alt = "Loro Parque Tickets — Tenerife";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0B2B2A 0%, #0A3D3A 100%)",
          color: "#F4F8F3",
          border: "14px solid #D0491F",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#F2A65A", display: "flex" }}>TENERIFE · PUERTO DE LA CRUZ</div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05, marginTop: 24, display: "flex" }}>
          Loro Parque Tickets
        </div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#E6F0E8", display: "flex" }}>
          Compare tickets & experiences · Book your day in Tenerife
        </div>
      </div>
    ),
    { ...size }
  );
}
