/**
 * Marquee tape band. One scrolling strip of mono, uppercase words separated
 * by `✶`, rendered twice for a seamless CSS loop.
 *
 * Decorative by design (DESIGN.md, MOTION 2): the band separates the hero
 * from the work list like a reel-to-reel tape label. It is purely CSS
 * animated, `aria-hidden`, and stops under prefers-reduced-motion via the
 * global reduced-motion block in globals.css.
 */
export function Marquee({ words }: { words: string[] }) {
  const track = (
    <span className="marquee__track font-meta">
      {words.map((word) => (
        <span key={word} className="flex items-center gap-6 py-3">
          {word}
          <span aria-hidden="true" className="text-rush">✶</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee" aria-hidden="true">
      {track}
      {track}
    </div>
  );
}
