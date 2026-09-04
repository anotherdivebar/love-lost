export type Show = {
  id: string;
  date: string;
  city: string;
  region: string;
  venue: string;
  bill: string[];
  ticketUrl: string | null;
  status: 'upcoming' | 'past';
};

export const shows: Show[] = [
  {
    id: '2026-09-27-ante-up-denver',
    date: '2026-09-27',
    city: 'Denver',
    region: 'CO',
    venue: 'Ante Up',
    bill: ['Love Lost'],
    ticketUrl: null,
    status: 'upcoming',
  },
];

const showDateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatShowDate(date: string) {
  return showDateFormatter.format(new Date(`${date}T12:00:00Z`));
}
