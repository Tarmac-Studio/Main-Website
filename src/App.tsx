import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollTop, PageTransitionWrapper } from "./utils/ScrollTop";

import Home from "./pages/Home";
import Layout from "./utils/Layout";
import About from "./pages/About";

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
      </Routes>
    </Router>
  );
}

export default App;
