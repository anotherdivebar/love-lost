import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { VideoFrame } from '@/components/video-frame';
import { archiveImages } from '@/data/media';
import { products } from '@/data/products';
import { shows } from '@/data/shows';

export default function Home() {
  const upcomingShows = shows.filter((show) => show.status === 'upcoming').slice(0, 3);
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <Image
            src="/images/hero-live.jpg"
            alt="Love Lost performing live under green stage lights"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-wash" />
          <p className="hero-kicker">Emotional Hardcore — Kansas</p>
          <h1 id="hero-title" className="hero-title">
            <span>Love</span>
            <span>Lost</span>
          </h1>
          <div className="hero-index" aria-hidden="true">
            <span>37.6872° N</span>
            <span>97.3301° W</span>
          </div>
          <div className="hero-note">
            <span>EST. KANSAS</span>
            <span>ANGRY / EMOTIONAL / HARDCORE</span>
          </div>
          <Link className="hero-link" href="#watch">
            Enter the noise <span aria-hidden="true">↓</span>
          </Link>
        </section>

        <div className="preview-strip" aria-hidden="true">
          <p>Love Lost // Kansas</p>
          <p>Official site &amp; archive</p>
          <p>MMXXVI</p>
        </div>

        <section className="video-section" id="watch" aria-labelledby="watch-title">
          <div className="section-index">
            <span>01</span>
            <p>Latest transmission</p>
          </div>
          <div className="video-heading">
            <p>Turn it up.</p>
            <h2 id="watch-title">Watch</h2>
          </div>
          <VideoFrame />
        </section>

        <section className="statement-section" aria-labelledby="statement-title">
          <div className="statement-image-wrap">
            <Image
              src="/images/band-cemetery.jpg"
              alt="Love Lost standing together outside in Kansas"
              fill
              sizes="(max-width: 760px) 100vw, 55vw"
              className="cover-image"
            />
            <span className="image-code">LL / KS / 001</span>
          </div>
          <div className="statement-copy">
            <span className="micro-label">The band</span>
            <h2 id="statement-title">Five bodies.<br />One nerve.</h2>
            <p>
              Love Lost is an emotional hardcore band from Kansas. Angry music,
              held close.
            </p>
            <Link className="text-link" href="/about">Band information →</Link>
          </div>
        </section>

        <section className="shows-section" aria-labelledby="shows-title">
          <div className="section-heading split-heading">
            <div>
              <span className="micro-label">02 / On the road</span>
              <h2 id="shows-title">Shows</h2>
            </div>
            <Link className="text-link" href="/shows">All dates →</Link>
          </div>
          {upcomingShows.length > 0 ? (
            <div className="show-list">
              {upcomingShows.map((show) => (
                <article className="show-row" key={show.id}>
                  <time dateTime={show.date}>{show.date}</time>
                  <div><strong>{show.city}, {show.region}</strong><span>{show.venue}</span></div>
                  <p>{show.bill.join(' / ')}</p>
                  {show.ticketUrl ? <a href={show.ticketUrl}>Tickets ↗</a> : <span>Info soon</span>}
                </article>
              ))}
            </div>
          ) : (
            <div className="shows-empty">
              <span aria-hidden="true">00</span>
              <div>
                <h3>No dates announced.</h3>
                <p>New shows will appear here when they are confirmed.</p>
              </div>
            </div>
          )}
        </section>

        <figure className="photo-break">
          <Image
            src="/images/floor-show.jpg"
            alt="Love Lost performing from the floor surrounded by the crowd"
            fill
            sizes="100vw"
            className="cover-image"
          />
          <figcaption>
            <span>Live archive</span>
            <span>Frame LL–012</span>
          </figcaption>
          <p aria-hidden="true">NO DISTANCE</p>
        </figure>

        <section className="merch-section" aria-labelledby="merch-title">
          <div className="section-heading split-heading">
            <div>
              <span className="micro-label">03 / Goods</span>
              <h2 id="merch-title">Merch</h2>
            </div>
            <Link className="text-link" href="/merch">View full collection →</Link>
          </div>
          <div className="merch-grid">
            {featuredProducts.map((product, index) => (
              <article className="merch-card" key={product.slug}>
                <Link href={`/merch#${product.slug}`} className="merch-image-wrap">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="merch-image"
                  />
                  <span>0{index + 1}</span>
                </Link>
                <div className="merch-card-meta">
                  <h3>{product.name}</h3>
                  <p>{product.price ?? 'Details pending'}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="archive-teaser" aria-labelledby="archive-title">
          <div className="archive-copy">
            <span className="micro-label">04 / Image archive</span>
            <h2 id="archive-title">Sweat.<br />Static.<br />Memory.</h2>
            <p>Live frames, contact sheets, and fragments from the floor.</p>
            <Link className="block-link" href="/media">Open archive <span>↗</span></Link>
          </div>
          {archiveImages.slice(0, 3).map((image, index) => (
            <figure className={`archive-teaser-image image-${index + 1}`} key={image.code}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 34vw" className="cover-image" />
              <figcaption>{image.code}</figcaption>
            </figure>
          ))}
        </section>

        <section className="links-section" aria-labelledby="listen-title">
          <span className="micro-label">05 / Listen</span>
          <h2 id="listen-title">Play it loud.</h2>
          <div className="platform-list">
            <a href="https://www.youtube.com/watch?v=_fLfkVS4WWk" target="_blank" rel="noreferrer">
              <span>01</span><strong>YouTube</strong><em>Watch ↗</em>
            </a>
          </div>
          <p className="links-note">Additional verified streaming links will be added when supplied.</p>
        </section>

        <section className="epk-callout" aria-labelledby="epk-title">
          <span className="micro-label">Booking / Press / Venues</span>
          <h2 id="epk-title">Need the files?</h2>
          <p>Press photos, band information, featured video, and technical placeholders.</p>
          <Link href="/epk">Open the EPK <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
