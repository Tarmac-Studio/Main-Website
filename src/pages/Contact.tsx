import ContactHome from "../components/ContactSection/ContactHome";
import ContactLaunch from "../components/ContactSection/ContactLaunch";
import ContactForm from "../components/ContactSection/ContactForm";
import Studio from "../shared/Studio";
import { usePageMeta } from "../utils/Meta";

const Contact = () => {
  usePageMeta(
    "Contact Us | Tarmac Digital Studio",
    "Let’s talk about your goals and how Tarmac can help bring them to life. Whether it’s branding, product design, development, SEO, or social media, we’re here to make it happen.."
  );
  return (
    <>
      <ContactHome />
      {/* Combined Gradient Background Section */}
      <section
        className="relative"
        style={{
          background: `
            radial-gradient(35% 25% at 50% 45%, rgba(0, 255, 255, 0.12) 0%, rgba(0, 255, 255, 0) 100%),
            radial-gradient(70% 60% at 50% 90%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
            black
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ContactLaunch />
        <ContactForm />
        <Studio />
      </section>
    </>
  );
};

export default Contact;
