import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { ScrollTop, PageTransitionWrapper } from "./utils/ScrollTop";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/portfolio";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-SPB2KG6Y89");
    ReactGA.send("pageview");
  }, []);
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <PageTransitionWrapper>
                <About />
              </PageTransitionWrapper>
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <PageTransitionWrapper>
                <Services />
              </PageTransitionWrapper>
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <PageTransitionWrapper>
                <Contact />
              </PageTransitionWrapper>
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <PageTransitionWrapper>
                <Portfolio />
              </PageTransitionWrapper>
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PageTransitionWrapper>
                <PrivacyPolicy />
              </PageTransitionWrapper>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
