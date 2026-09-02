const navigation = [
  { href: '/shows', label: 'Shows' },
  { href: '/merch', label: 'Merch' },
  { href: '/media', label: 'Media' },
  { href: '/epk', label: 'EPK' },
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
