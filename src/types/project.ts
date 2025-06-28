export interface Project {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  partner?: { name: string; url?: string };
  type?: string[];
  date?: string;
  thumbnail?: string;
  gallery?: string[];
}
