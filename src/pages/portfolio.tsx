import PortfolioHome from "../components/portfolioSection/portfolioHome";
import Ideas from "../components/portfolioSection/ideas";
import PortfolioGrid from "../components/portfolioSection/portfolioGrid";
import { usePageMeta } from "../utils/Meta";

const Portfolio = () => {
  usePageMeta(
    "Our Portfolio | Tarmac Digital Studio",
    "Take a look at our portfolio showcasing innovative design, branding, and development projects for diverse clients."
  );

  return (
    <>
      <PortfolioHome />
      <Ideas />
      <PortfolioGrid />
    </>
  );
};

export default Portfolio;
