import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into `out/`,
  // deployable to any static host (Cloudflare Pages, Vercel, S3, ...).
  output: "export",
  images: {
    // The default image optimizer needs a server; not available in static export.
    unoptimized: true,
  },
};

export default nextConfig;
