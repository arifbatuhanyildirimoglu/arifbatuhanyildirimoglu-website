export interface Project {
  title: string;
  description: string;
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
    description: "My personal website built with Next.js",
    images: [
      "https://arifbatuhanyildirimoglu-website.s3.eu-north-1.amazonaws.com/images/personal-website.png",
    ],
    links: {
      github: "https://github.com/arifbatuhanyildirimoglu/arifbatuhanyildirimoglu-website",
      live: "https://arifbatuhanyildirimoglu.com"
    },
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Supabase", "Vercel"],
  },
  {
    title: "Fashion Tailor",
    description: "A hybrid casual game built with Unity",
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
    description: "A hyper-casual game built with Unity",
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
    description: "A desktop e-commerce app like hepsiburada",
    images: [
      "https://arifbatuhanyildirimoglu-website.s3.eu-north-1.amazonaws.com/images/hepsiorada.png",
    ],
    technologies: ["Java", "JavaFX", "SqlLite", "CSS", "SceneBuilder"],
  },
]



