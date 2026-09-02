import Link from 'next/link';

const navigation = [
  { href: '/shows', label: 'Shows' },
  { href: '/merch', label: 'Merch' },
  { href: '/media', label: 'Media' },
  { href: '/epk', label: 'EPK' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Love Lost home">
        LL<span aria-hidden="true">//</span>KS
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map((item, index) => (
          <Link href={item.href} key={item.href}>
            <span>0{index + 1}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
