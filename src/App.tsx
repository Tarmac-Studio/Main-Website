import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollTop, PageTransitionWrapper } from "./utils/ScrollTop";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
