import type { Metadata } from 'next';
import Image from 'next/image';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Band — Love Lost',
  description: 'About Love Lost, an emotional hardcore band from Kansas.',
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main about-page">
        <PageIntro index="05" label="The band" title="Love Lost" note="Emotional hardcore — Kansas." />
        <section className="about-feature">
          <div className="about-image">
            <Image src="/images/band-train.jpg" alt="Love Lost standing beside a train" fill sizes="(max-width: 760px) 100vw, 62vw" className="cover-image" />
          </div>
          <div className="about-copy">
            <span className="micro-label">Band / Kansas</span>
            <h2>Love Lost plays angry, emotional hardcore.</h2>
            <p className="content-placeholder">[Approved short biography to be supplied.]</p>
          </div>
        </section>
        <section className="members-section" aria-labelledby="members-title">
          <div className="listing-label"><span id="members-title">Members</span><span>05</span></div>
          <div className="members-placeholder">
            <p>[Member names and roles to be supplied.]</p>
            <p>The site will publish only confirmed credits.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
