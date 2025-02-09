export interface Project {
  title: string;
  description: {
    en: string;
    tr: string;
  };
  images: string[];
  technologies: string[];

  links?: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    title: "arifbatuhanyildirimoglu.com",
    description: {
      en: "My personal website built with Next.js",
      tr: "Next.js ile geliştirilmiş kişisel web sitem"
  },
    images: [
      "https://arifbatuhanyildirimoglu-website.s3.eu-north-1.amazonaws.com/images/personal-website.png",
    ],
    links: {
      github: "https://github.com/arifbatuhanyildirimoglu/arifbatuhanyildirimoglu-website",
      live: "https://arifbatuhanyildirimoglu.com"
    },
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Supabase", "Vercel", "AWS"],
  },
  {
    title: "Fashion Tailor",
    description: {
      en: "A hybrid-casual game built with Unity",
      tr: "Unity ile geliştirilmiş bir hybrid-casual oyun"
    },
    images: [
      "https://arifbatuhanyildirimoglu-website.s3.eu-north-1.amazonaws.com/images/fashion-tailor.jpg",
    ],

    links: {
      live: "https://play.google.com/store/apps/details?id=happy.game.fashiontailorm"
    },
    technologies: ["Unity", "C#"],
  },
  {
    title: "Fisher Rope",
    description: {
      en: "A hyper-casual game built with Unity",
      tr: "Unity ile geliştirilmiş bir hyper-casual oyun"
    },
    images: [
      "https://arifbatuhanyildirimoglu-website.s3.eu-north-1.amazonaws.com/images/fisher-rope.jpg",

    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=happy.game.fisherrope&hl=en&gl=US"
    },
    technologies: ["Unity", "C#"],
  },
  {
    title: "hepsiorada",
    description: {
      en: "A desktop e-commerce app like hepsiburada",
      tr: "Hepsiburada benzeri bir masaüstü e-ticaret uygulaması"
    },
    images: [

      "https://arifbatuhanyildirimoglu-website.s3.eu-north-1.amazonaws.com/images/hepsiorada.png",
    ],
    technologies: ["Java", "JavaFX", "SqlLite", "CSS", "SceneBuilder"],
  },
]



