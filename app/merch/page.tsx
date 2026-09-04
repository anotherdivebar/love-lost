import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Merch — Love Lost',
  description: 'The official Love Lost merch store is coming soon.',
};

export default function MerchPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main merch-page">
        <PageIntro index="02" label="Goods" title="Merch" note="Merch store coming soon." />
      </main>
      <SiteFooter />
    </>
  );
}
