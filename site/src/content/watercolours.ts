/**
 * Not a case study — a gallery. Painting is on the CV under Outside
 * work, and it belongs on the site for the same reason: it says
 * something true that the product work cannot.
 *
 * Drop files into public/watercolours/<category>/ and list them here.
 * Filenames carry the order; a title is optional.
 */
export type Painting = {
  src: string;
  title?: string;
  note?: string;
};

export type Category = {
  id: string;
  name: string;
  blurb?: string;
  paintings: Painting[];
};

export const watercolours: Category[] = [
  {
    id: "architecture",
    name: "Architecture",
    blurb: "Urban sketching, mostly on location.",
    paintings: [],
  },
  { id: "birds", name: "Birds", paintings: [] },
  { id: "animals", name: "Animals", paintings: [] },
  { id: "people", name: "People", paintings: [] },
];

export const hasWatercolours = watercolours.some((c) => c.paintings.length > 0);
