const navigation = [
  { href: '/shows.html', label: 'Shows' },
  { href: '/merch.html', label: 'Merch' },
  { href: '/media.html', label: 'Media' },
  { href: '/epk.html', label: 'EPK' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Love Lost home">
        LL<span aria-hidden="true">//</span>KS
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item, index) => (
          <a href={item.href} key={item.href}>
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
