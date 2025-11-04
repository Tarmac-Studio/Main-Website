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
  },
  {
    id: 6,
     imageUrl: portfolioAssets.demolition,
  },
  {
    id: 7,
   imageUrl: portfolioAssets.social,
  },
  {
    id: 8,
     imageUrl: portfolioAssets.unique,
  },
  {
    id: 9,
    imageUrl: portfolioAssets.agriculture,
  },
  {
    id: 10,
    imageUrl: portfolioAssets.Aesthetics,
  },
];
