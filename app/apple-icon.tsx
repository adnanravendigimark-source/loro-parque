import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B2B2A",
          borderRadius: "38px",
          border: "none",
          boxSizing: "border-box",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 44 44" fill="none"><path d="M6 36C8 24 18 14 34 12C32 28 22 38 6 36Z" fill="#14796C"/><path d="M17 12c5-4 13-2 14 5 1 5-2 9-6 11-1-3-1-6-3-8-3 1-6 0-7-3 0-2 1-4 2-5Z" fill="#D0491F"/><path d="M17 15c-4 0-6 3-5 6 2-1 4-2 6-5Z" fill="#F2A65A"/><circle cx="22" cy="16" r="1.6" fill="#fff"/><circle cx="22" cy="16" r="0.7" fill="#0B2B2A"/><path d="M27 27c3 3 4 7 3 10-3-2-5-5-5-9Z" fill="#F2A65A"/></svg>
      </div>
    ),
    { ...size }
  );
}
