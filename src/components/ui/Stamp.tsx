/**
 * Stamp capsule. A rotated strip of mono text on the paper ground with a
 * 2px ink border (DESIGN.md: "rotated capsules of mono text on accent
 * background"). Used for markers like "OPEN TO OPPORTUNITIES" and "THESIS".
 *
 * Fills are additive and optional:
 *   - no fill: paper ground, ink text (the quiet stamp)
 *   - `fill="rush"`: signal orange-red ground, paper text (the loud stamp)
 *   - `fill="zap"`: acid yellow ground, ink text (allowed only as a small fill)
 *
 * The -2° rotation is baked into the `.stamp` utility so stamps always read
 * as hand-placed. Reduced motion does not touch it; rotation is static.
 */
export function Stamp({
  children,
  fill = "paper",
  className = "",
}: {
  children: React.ReactNode;
  fill?: "paper" | "rush" | "zap";
  className?: string;
}) {
  const fillClass =
    fill === "rush"
      ? "bg-rush text-paper border-ink"
      : fill === "zap"
        ? "bg-zap text-ink border-ink"
        : "bg-paper text-ink border-ink";

  return <span className={`stamp ${fillClass} ${className}`}>{children}</span>;
}
