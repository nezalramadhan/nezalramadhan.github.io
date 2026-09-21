/**
 * Format a URL into its readable host for display (e.g. "github.com/name"),
 * stripping the protocol and trailing slash.
 */
export function formatURL(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.host + parsed.pathname.replace(/\/$/, "");
  } catch {
    return url;
  }
}