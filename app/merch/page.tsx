import type { Metadata } from 'next';
import Image from 'next/image';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Merch — Love Lost',
  description: 'Official Love Lost merchandise and artwork.',
};

export default function MerchPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main merch-page">
        <PageIntro index="02" label="Goods / Archive" title="Merch" note="Original Love Lost artwork. Product details will be posted when the store is ready." />
        <div className="store-notice">
          <span>Store status</span>
          <strong>Catalogue preview</strong>
          <p>Pricing, sizes, inventory, and checkout have not been supplied. No orders are being taken through this site yet.</p>
        </div>
        <section className="product-list" aria-label="Merchandise catalogue">
          {products.map((product, index) => (
            <article className="product-row" id={product.slug} key={product.slug}>
              <div className="product-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="product-art">
                <Image src={product.image} alt={product.alt} fill sizes="(max-width: 760px) 100vw, 55vw" className="merch-image" />
              </div>
              <div className="product-copy">
                <span className="micro-label">Love Lost / Official design</span>
                <h2>{product.name}</h2>
                <dl>
                  <div><dt>Price</dt><dd>{product.price ?? 'To be confirmed'}</dd></div>
                  <div><dt>Sizes</dt><dd>{product.variants.length ? product.variants.join(' / ') : 'To be confirmed'}</dd></div>
                  <div><dt>Status</dt><dd>{product.purchaseUrl ? 'Available' : 'Not yet for sale online'}</dd></div>
                </dl>
                {product.purchaseUrl ? (
                  <a className="product-action" href={product.purchaseUrl}>Purchase ↗</a>
                ) : (
                  <button className="product-action" type="button" disabled>Checkout not connected</button>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
