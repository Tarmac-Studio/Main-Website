import { useEffect } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Scroll to top on route change
const ScrollTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// Page transition wrapper
interface PageTransitionWrapperProps {
  children: ReactNode;
}

const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export { ScrollTop, PageTransitionWrapper };
