import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/contact/ContactPage";

const ProjectsPage = () => (
  <div style={{ padding: "50px", textAlign: "center" }}>
    <h2>My Projects</h2>
  </div>
);
const BlogPage = () => (
  <div style={{ padding: "50px", textAlign: "center" }}>
    <h2>My Blog</h2>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
