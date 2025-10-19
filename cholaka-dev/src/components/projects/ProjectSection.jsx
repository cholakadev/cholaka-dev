import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "./ProjectSection.css";

export default function ProjectSection({ project, index, innerRef }) {
  const { id, title, image, description, snippet, url } = project;

  return (
    <section
      id={id}
      ref={innerRef}
      className={`project-section ${index % 2 ? "reverse" : ""}`}
    >
      {/* Image block */}
      <motion.div
        className="project-image"
        initial={{ opacity: 0, x: index % 2 ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <img src={image} alt={title} />
      </motion.div>

      {/* Content block */}
      <motion.div
        className="project-content"
        initial={{ opacity: 0, x: index % 2 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2>{title}</h2>
        <p>{description}</p>

        {snippet && (
          <pre className="code-snippet">
            <code>{snippet}</code>
          </pre>
        )}

        {url && (
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={16} /> View Website
          </motion.a>
        )}
      </motion.div>
    </section>
  );
}
