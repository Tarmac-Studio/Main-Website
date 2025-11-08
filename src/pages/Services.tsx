import ServicesHome from "../components/ServicesSection/ServicesHome";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { usePageMeta } from "../utils/Meta";

const Services = () => {
  usePageMeta(
    "Our Services | Tarmac Digital Studio",
    "We don’t just offer services, we create solutions. Every startup is different, and that’s why our approach is tailored at meeting your exact need, solving challenges, and achieving goals."
  );
  return (
    <>
      <ServicesHome />
      <ServicesSection />
    </>
  );
};

export default Services;
