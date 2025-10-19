import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import projects from "../../data/projects.js";
import "./FeaturedProjects.css";

export default function FeaturedProjects({ scrollTo }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleProjectClick = (id) => {
    if (pathname === "/projects") {
      // Already on Projects page — scroll locally
      scrollTo?.(id);
    } else {
      // Coming from Home — navigate to Projects page + hash
      navigate(`/projects#${id}`);
    }
  };

  return (
    <motion.section
      className="highlights"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="highlights-title">Featured Projects</h1>
      <motion.div
        className="highlight-list"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            className="highlight-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => handleProjectClick(p.id)}
          >
            <img src={p.image} alt={p.title} />
            <div className="highlight-overlay">
              <h3>{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
