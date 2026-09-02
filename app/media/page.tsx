import type { Metadata } from 'next';
import Image from 'next/image';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { archiveImages } from '@/data/media';

export const metadata: Metadata = {
  title: 'Media Archive — Love Lost',
  description: 'Live photography and visual archive from Love Lost.',
};

export default function MediaPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main media-page">
        <PageIntro index="03" label="Visual archive" title="Media" note="Live frames, contact-sheet numbers, and the things the room refused to hold." />
        <section className="contact-sheet" aria-label="Love Lost live photography archive">
          {archiveImages.map((image, index) => (
            <figure className={`contact-frame contact-${(index % 6) + 1}`} key={image.code}>
              <div>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 42vw" className="cover-image" />
              </div>
              <figcaption><span>{image.code}</span><span>Love Lost / Live</span></figcaption>
            </figure>
          ))}
        </section>
        <section className="archive-endcap">
          <span>10 frames</span>
          <h2>The room remembers.</h2>
          <p>Additional live photography will be added as the archive is cleared for publication.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
