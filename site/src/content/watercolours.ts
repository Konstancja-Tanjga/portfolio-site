/**
 * Not a case study — a gallery. Painting is on the CV under Outside work,
 * and it belongs on the site for the same reason: it says something true
 * that the product work cannot.
 *
 * A category may hold paintings directly, or group them into series. A
 * series is a real thing — one trip, one subject, one sitting — so it
 * gets a name and a line of context rather than being a folder.
 */
export type Painting = {
  src: string;
  title?: string;
  note?: string;
};

export type Series = {
  id: string;
  name: string;
  blurb?: string;
  paintings: Painting[];
};

export type Category = {
  id: string;
  name: string;
  blurb?: string;
  paintings?: Painting[];
  series?: Series[];
};

const france = (file: string, title: string, note?: string): Painting => ({
  src: `/watercolours/architecture/france/${file}`,
  title,
  note,
});

export const watercolours: Category[] = [
  {
    id: "architecture",
    name: "Architecture",
    blurb: "Urban sketching, mostly on location.",
    series: [
      {
        id: "france-loire",
        name: "France, Loire and castles",
        blurb:
          "Painted on a trip through the Loire and Brittany, 2026 — Blois, Clos Lucé, Saumur, Nantes.",
        paintings: [
          france("02-blois.jpg", "Château de Blois"),
          france("03-blois_sala-tronowa.jpg", "Blois", "the throne room"),
          france("01-blois-mix.jpg", "Blois", "studies"),
          france("06-closluce_davinci.jpg", "Clos Lucé", "Leonardo's last house"),
          france("12-tuffeau-dwellings-of-saumur.jpg", "Saumur", "tuffeau dwellings"),
          france("04-chateau-ducs-bretagne.jpg", "Château des ducs de Bretagne", "Nantes"),
          france("11-shipyard_nantes.jpg", "Shipyard", "Nantes"),
          france("09-koza-le-vazereau.jpg", "Le Vazereau", "the goat"),
          france("05-cheese.jpg", "Cheese"),
          france("10-mapa.jpg", "The map"),
          france("07-france_20260521_12414588.jpg", "Loire", "21 May"),
          france("08-france_20260527_16212628.jpg", "Loire", "27 May"),
        ],
      },
    ],
  },
  { id: "birds", name: "Birds", paintings: [] },
  { id: "animals", name: "Animals", paintings: [] },
  { id: "people", name: "People", paintings: [] },
];

/** Everything in a category, whether loose or in a series. */
export const countPaintings = (category: Category): number =>
  (category.paintings?.length ?? 0) +
  (category.series ?? []).reduce((n, s) => n + s.paintings.length, 0);
