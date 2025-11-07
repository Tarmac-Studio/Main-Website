import { portfolioAssets } from "../assets/portfolioAssets.ts";

export interface ProjectData {
  id: string | number;
  imageUrl: string; // Add this
  link?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    imageUrl: portfolioAssets.tarmac,
    link: "https://www.tarmacdigitalstudio.com",
  },
  {
    id: 2,
    imageUrl: portfolioAssets.sixth_sense,
    link: "https://sixthsenseleadership.com/",
  },
  {
    id: 3,
    imageUrl: portfolioAssets.revolution,
    link: "https://ejideson.com/",
  },
  {
    id: 4,
    imageUrl: portfolioAssets.luxe,
    link: "https://luxe-auto-pied.vercel.app/",
  },
  {
    id: 5,
    imageUrl: portfolioAssets.lider,
    link: "https://liderpodhale.vercel.app/",
  },
  {
    id: 6,
    imageUrl: portfolioAssets.demolition,
    link: "https://www.figma.com/design/y0bvPjHU55Ugc1P0Wbc3NF/Doctor-Demolition?m=auto&t=K0RVXLsi0rrt0bfL-6",
  },
  {
    id: 7,
    imageUrl: portfolioAssets.social,
    link: "https://www.figma.com/design/5rIcIp1hrFIlG2wJDGBAMG/Social-Queue?m=auto&t=K0RVXLsi0rrt0bfL-6",
  },
  {
    id: 8,
    imageUrl: portfolioAssets.unique,
    link: "https://www.figma.com/design/U2dOstfsxDZzPnDxOy6kLv/Unique-Wedding-Events?m=auto&t=K0RVXLsi0rrt0bfL-6",
  },
  {
    id: 9,
    imageUrl: portfolioAssets.agriculture,
    link: "https://www.figma.com/design/JU8Qt7RaJlwxh8rOlCxsbg/Kamara?m=auto&t=K0RVXLsi0rrt0bfL-6",
  },
  {
    id: 10,
    imageUrl: portfolioAssets.Aesthetics,
    link: "https://www.figma.com/design/lCbctpe9YPuZYtBtgIrI14/Hagi?node-id=0-1&t=JAiac4L1mC4ve8PJ-1",
  },
];
