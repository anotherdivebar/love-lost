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

// Add confirmed dates here. The site intentionally renders an honest empty state
// until real show details are supplied.
export const shows: Show[] = [];
