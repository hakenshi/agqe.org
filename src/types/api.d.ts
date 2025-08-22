interface User {
  id: number;
  cpf: string;
  color: string;
  firstName: string;
  secondName: string;
  photo?: string;
  occupation: string;
  birthDate: string;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website: string;
  sponsoringSince: string;
  createdAt: string;
  updatedAt: string;
}

interface Event {
  id: number;
  name: string;
  coverImage: string;
  eventType: 'gallery' | 'event' | 'event_gallery';
  slug: string;
  markdown?: string;
  date: string;
  startingTime: string;
  endingTime: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  images?: EventImage[];
}

interface EventImage {
  id: number;
  eventId: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}