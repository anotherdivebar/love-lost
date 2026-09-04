import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { formatShowDate, shows } from '@/data/shows';

export const metadata: Metadata = {
  title: 'Shows — Love Lost',
  description: 'Confirmed upcoming Love Lost shows.',
};

export default function ShowsPage() {
  const upcoming = shows.filter((show) => show.status === 'upcoming');

  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <PageIntro index="01" label="On the road" title="Shows" note="Kansas and wherever the road opens." />
        <section className="listing-section" aria-labelledby="upcoming-title">
          <div className="listing-label"><span>Upcoming</span><span>{String(upcoming.length).padStart(2, '0')}</span></div>
          <h2 id="upcoming-title" className="sr-only">Upcoming shows</h2>
          {upcoming.length ? (
            <div className="show-list page-show-list">
              {upcoming.map((show) => (
                <article className="show-row" key={show.id}>
                  <time dateTime={show.date}>{formatShowDate(show.date)}</time>
                  <div><strong>{show.city}, {show.region}</strong><span>{show.venue}</span></div>
                  <p>{show.bill.join(' / ')}</p>
                  {show.ticketUrl ? <a href={show.ticketUrl}>Tickets ↗</a> : <span>Info soon</span>}
                </article>
              ))}
            </div>
          ) : (
            <div className="page-empty-state">
              <span aria-hidden="true">//</span>
              <div>
                <h2>No dates announced.</h2>
              </div>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
