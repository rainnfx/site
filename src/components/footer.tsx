import { jetbrains_mono } from "@/lib/fonts";

export function Footer() {
  return (
    <footer
      className={`${jetbrains_mono.className} p-4 w-full uppercase text-xs text-muted-foreground`}
    >
      <p>&copy; Matteo Aure 2025. v2.0.0</p>
    </footer>
  );
}
