export type Publication = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  topic: string;
  image: string;
  imageAlt: string;
};

// Add approved stories here when the publication launches.
// The homepage automatically replaces its empty state when this list has entries.
export const publications: Publication[] = [];
