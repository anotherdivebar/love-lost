import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-mark" aria-label="Love Lost">
        Love<br />Lost
      </div>
      <div className="footer-meta">
        <p>Emotional Hardcore</p>
        <p>Kansas, USA</p>
        <p>© Love Lost</p>
      </div>
      <nav aria-label="Footer navigation" className="footer-links">
        <Link href="/about">About</Link>
        <Link href="/shows">Shows</Link>
        <Link href="/merch">Merch</Link>
        <Link href="/media">Media</Link>
        <Link href="/epk">Press / EPK</Link>
        <a href="https://www.youtube.com/watch?v=_fLfkVS4WWk" target="_blank" rel="noreferrer">YouTube ↗</a>
      </nav>
    </footer>
  );
}
