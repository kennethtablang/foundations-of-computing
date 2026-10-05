import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Foundations of Computing Reviewer",
    short_name: "IT Reviewer",
    description: "Flashcards, notes, and practice exams for Handouts 03 to 08.",
    start_url: "/",
    display: "standalone",
    background_color: "#eef1f8",
    theme_color: "#eef1f8",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
