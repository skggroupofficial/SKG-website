import type { MetadataRoute } from "next";
import { brand } from "../content/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.short,
    description: brand.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#F4EFE4",
    theme_color: "#2C1C10",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
