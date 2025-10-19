import "./ProjectsPage.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import projects from "../../data/projects.js";
import FeaturedProjects from "../../components/projects/FeaturedProjects.jsx";
import ProjectSection from "../../components/projects/ProjectSection.jsx";

export default function ProjectsPage() {
  const refs = useRef({});
  const { hash } = useLocation();

  // For direct navigation (e.g. /projects#pawpal)
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [hash]);

  // Local scroll (when user clicks from FeaturedProjects inside same page)
  const scrollTo = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Featured projects at top of page */}
      <FeaturedProjects scrollTo={scrollTo} />

      {/* Full project sections */}
      <div className="projects-page">
        {projects.map((p, i) => (
          <ProjectSection
            key={p.id}
            project={p}
            index={i}
            innerRef={(el) => (refs.current[p.id] = el)}
          />
        ))}
      </div>
    </>
  );
}
