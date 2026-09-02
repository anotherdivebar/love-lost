import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { VideoFrame } from '@/components/video-frame';
import { shows } from '@/data/shows';

export default function Home() {
  const upcomingShows = shows.filter((show) => show.status === 'upcoming').slice(0, 3);

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
          <a className="hero-link" href="#watch">
            Enter the noise <span aria-hidden="true">↓</span>
          </a>
        </section>

        <div className="preview-strip" aria-hidden="true">
          <p>Love Lost // Kansas</p>
          <p>Official site &amp; archive</p>
          <p>MMXXVI</p>
        </div>

        <section className="video-section" id="watch" aria-labelledby="watch-title">
          <p className="section-kicker">Latest transmission</p>
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
          </div>
        </section>

        <section className="shows-section" aria-labelledby="shows-title">
          <div className="section-heading split-heading">
            <div>
              <span className="micro-label">On the road</span>
              <h2 id="shows-title">Shows</h2>
            </div>
            <a className="text-link" href="/shows">All dates →</a>
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

        <nav className="home-destinations" aria-label="Explore Love Lost">
          <a className="home-destination" href="/merch">
            <span>Goods</span><strong>Merch</strong><em>Open collection ↗</em>
          </a>
          <a className="home-destination" href="/media">
            <span>Image archive</span><strong>Media</strong><em>Open archive ↗</em>
          </a>
          <a className="home-destination" href="/media">
            <span>Listen</span><strong>Play it loud</strong><em>Open media ↗</em>
          </a>
        </nav>

        <section className="epk-callout" aria-labelledby="epk-title">
          <span className="micro-label">Booking / Press / Venues</span>
          <h2 id="epk-title">Need the files?</h2>
          <p>Press photos, band information, featured video, and technical placeholders.</p>
          <a href="/epk">Open the EPK <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
