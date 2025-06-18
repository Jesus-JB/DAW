export interface NasaResponse {
  collection: {
    items: NasaItem[];
  };
}

export interface NasaItem {
  data: NasaData[];
  links: NasaLink[];
}

export interface NasaData {
  title: string;
  description: string;
  date_created: string;
  center: string;
}

export interface NasaLink {
  href: string;
  rel: string;
  render?: string;
}