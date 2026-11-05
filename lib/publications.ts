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

// Add approved stories here when the journal launches.
// Set topic to one of: "Close to Home: Science at NYU", "Interviews: In Their Own Words", or "Op-Eds".
export const publications: Publication[] = [];
