import localFont from "next/font/local";

// Self-hosted brand families (SKG Brand Board 2026 §04).
// Files live in /assets/fonts (paths are relative to this file in /app).

export const playfair = localFont({
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Iowan Old Style", "Georgia", "Times New Roman", "serif"],
  src: [
    { path: "../assets/fonts/playfairdisplay-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/playfairdisplay-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../assets/fonts/playfairdisplay-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/playfairdisplay-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../assets/fonts/playfairdisplay-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/playfairdisplay-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/playfairdisplay-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../assets/fonts/playfairdisplay-900-normal.woff2", weight: "900", style: "normal" },
  ],
});

export const libreFranklin = localFont({
  variable: "--font-libre",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  src: [
    { path: "../assets/fonts/librefranklin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/librefranklin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/librefranklin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../assets/fonts/librefranklin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/librefranklin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/librefranklin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

export const dmMono = localFont({
  variable: "--font-dmmono",
  display: "swap",
  fallback: ["ui-monospace", "SF Mono", "Roboto Mono", "Menlo", "monospace"],
  src: [
    { path: "../assets/fonts/dmmono-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/dmmono-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../assets/fonts/dmmono-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

export const fontVariables = `${playfair.variable} ${libreFranklin.variable} ${dmMono.variable}`;
