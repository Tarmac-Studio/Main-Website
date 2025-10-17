import { portfolioAssets } from "../assets/portfolioAssets.ts";

export interface ProjectData {
  id: string | number;
  imageUrl: string; // Add this
}

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    imageUrl: portfolioAssets.tarmac,
  },
  {
    id: 2,
    imageUrl: portfolioAssets.Aesthetics,
  },
  {
    id: 3,
    imageUrl: portfolioAssets.luxe,
  },
  {
    id: 4,
    imageUrl: portfolioAssets.agriculture,
  },
  {
    id: 5,
    imageUrl: portfolioAssets.demolition,
  },
  {
    id: 6,
    imageUrl: portfolioAssets.social,
  },
  {
    id: 7,
    imageUrl: portfolioAssets.unique,
  },
  {
    id: 8,
    imageUrl: portfolioAssets.use,
  },
  {
    id: 9,
    imageUrl: portfolioAssets.use,
  },
  {
    id: 10,
    imageUrl: portfolioAssets.use,
  },
];
