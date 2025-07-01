export interface Experience {
  slug: string;
  title: string;
  company: {
    name: string;
    url?: string;
  };
  date: string;
  description?: string;
}
