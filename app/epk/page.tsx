import type { Metadata } from 'next';
import Image from 'next/image';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { VideoFrame } from '@/components/video-frame';
import { contactEmail, contactHref } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Press / EPK — Love Lost',
  description: 'Love Lost electronic press kit: band information, video, press photos, and contact information.',
};

const pressPhotos = [
  { preview: '/images/press-wide.jpg', download: '/press/love-lost-press-01.jpg', alt: 'Love Lost group press photo against an industrial wall', code: 'PRESS–01' },
  { preview: '/images/press-portrait.jpg', download: '/press/love-lost-press-02.jpg', alt: 'Love Lost group portrait', code: 'PRESS–02' },
  { preview: '/images/band-cemetery.jpg', download: '/press/love-lost-press-03.jpg', alt: 'Love Lost group portrait outdoors', code: 'PRESS–03' },
];

export default function EpkPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main epk-page">
        <PageIntro index="04" label="Press / Booking" title="EPK" note="A working file for promoters, venues, journalists, photographers, and other bands." />

        <section className="epk-band epk-block" aria-labelledby="epk-band-title">
          <div className="epk-label">01 / Band</div>
          <div>
            <h2 id="epk-band-title">Love Lost<br /><span>Kansas</span></h2>
            <p className="epk-lede">Love Lost is an emotional hardcore band from Kansas.</p>
            <p className="content-placeholder">[Approved short biography and member credits to be supplied.]</p>
          </div>
        </section>

        <section className="epk-block epk-music" aria-labelledby="epk-music-title">
          <div className="epk-label">02 / Music</div>
          <div>
            <h2 id="epk-music-title">Verified links</h2>
            <a className="epk-link-row" href="https://www.youtube.com/watch?v=_fLfkVS4WWk" target="_blank" rel="noreferrer"><span>YouTube</span><span>Watch ↗</span></a>
            <a className="epk-link-row" href="https://open.spotify.com/artist/4Ep26QzgkXH5eQTjsowcOt" target="_blank" rel="noreferrer"><span>Spotify</span><span>Listen ↗</span></a>
          </div>
        </section>

        <section className="epk-block epk-video" aria-labelledby="epk-video-title">
          <div className="epk-label">03 / Featured video</div>
          <div>
            <h2 id="epk-video-title" className="sr-only">Featured video</h2>
            <VideoFrame />
          </div>
        </section>

        <section className="epk-block epk-press" aria-labelledby="epk-press-title">
          <div className="epk-label">04 / Press photos</div>
          <div>
            <div className="epk-section-heading"><h2 id="epk-press-title">Approved images</h2><p>High-resolution JPG</p></div>
            <div className="press-grid">
              {pressPhotos.map((photo) => (
                <figure key={photo.code}>
                  <div><Image src={photo.preview} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, 30vw" className="cover-image" /></div>
                  <figcaption><span>{photo.code}</span><a href={photo.download} download>Download ↓</a></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="epk-block epk-contacts" aria-labelledby="epk-contact-title">
          <div className="epk-label">05 / Contact</div>
          <div>
            <h2 id="epk-contact-title">Contact</h2>
            <dl>
              {['Booking', 'Press', 'General'].map((label) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd><a href={contactHref}>{contactEmail}</a></dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="epk-block epk-tech" aria-labelledby="epk-tech-title">
          <div className="epk-label">06 / Technical</div>
          <div>
            <h2 id="epk-tech-title">Stage plot and input list available on request.</h2>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
