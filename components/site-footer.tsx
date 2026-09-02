import { contactEmail, contactHref } from '@/data/contact';

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
        <a href="/about">About</a>
        <a href="/shows">Shows</a>
        <a href="/merch">Merch</a>
        <a href="/media">Media</a>
        <a href="/epk">Press / EPK</a>
        <a href={contactHref}>{contactEmail}</a>
        <a href="https://www.youtube.com/watch?v=_fLfkVS4WWk" target="_blank" rel="noreferrer">YouTube ↗</a>
      </nav>
    </footer>
  );
}
