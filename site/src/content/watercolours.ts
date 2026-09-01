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

const at = (folder: string) => (file: string, title: string, note?: string): Painting => ({
  src: `/watercolours/${folder}/${file}`,
  title,
  note,
});

const france = at("architecture/france");
const cadiz = at("architecture/cadiz");
const animal = at("animals");
const bird = at("birds");

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
          "Painted on a trip through the Loire and Brittany — the châteaux, and what was growing and standing around them.",
        paintings: [
          france("02-chambord.jpg", "Chambord"),
          france("03-chanonceau.jpg", "Chenonceau"),
          france("04-chaumont-sur-loire.jpg", "Chaumont-sur-Loire"),
          france("05-chateau-de-saumur.jpg", "Château de Saumur"),
          france("06-chateau-du-clos-luce.jpg", "Château du Clos Lucé", "Leonardo's last house"),
          france("01-cedre-noir.jpg", "Cèdre Noir"),
          france("09-pierre-bertrand-couly.jpg", "Pierre Bertrand Couly", "Chinon"),
          france("08-levazereau.jpg", "Le Vazereau"),
          france("07-great-elephant-from-nantes.jpg", "The Great Elephant", "Nantes"),
        ],
      },
      {
        id: "cadiz",
        name: "Cádiz province",
        blurb: "Andalusia — the white towns and the hills behind them.",
        paintings: [cadiz("01-molinos-de-vejer-1-copy.jpg", "Molinos de Vejer")],
      },
    ],
  },
  {
    id: "birds",
    name: "Birds",
    paintings: [
      bird("01-flaming-na-krzesle-w-ramce-copy.jpg", "Flamingo on a chair"),
      bird("02-gaviota-i-monstera-copy.jpg", "Gaviota and monstera"),
    ],
  },
  {
    id: "animals",
    name: "Animals",
    paintings: [
      animal("01-alejandro-w-ramce-4-copy.jpg", "Alejandro"),
      animal("02-geneta-w-ramce-3-copy.jpg", "Geneta"),
    ],
  },
  { id: "people", name: "People", paintings: [] },
];

/** Everything in a category, whether loose or in a series. */
export const countPaintings = (category: Category): number =>
  (category.paintings?.length ?? 0) +
  (category.series ?? []).reduce((n, s) => n + s.paintings.length, 0);
