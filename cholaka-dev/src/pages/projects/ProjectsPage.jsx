import "./ProjectsPage.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

import imotenImg from "../../assets/imoten-signal.png";
import pawpalImg from "../../assets/pawpal.png";
import casImg from "../../assets/cas-platform.png";

const projects = [
  {
    id: "imoten-signal",
    title: "Imoten Signal",
    image: imotenImg,
    description:
      "AI-powered real estate platform that connects users with properties using OpenAI semantic search and smart filters. Backend: .NET 8 APIs, Azure Functions, and MongoDB.",
    snippet: `// Example: property match rule
if (embeddingScore > 0.92 && priceWithinBudget)
{
    matchedProperties.Add(listing);
}`,
  },
  {
    id: "pawpal",
    title: "PawPal",
    image: pawpalImg,
    description:
      "Lost & found pet app using image recognition and Azure Notification Hubs. Azure Functions compare uploaded pet photos with database entries and alert users instantly.",
    snippet: `// Azure Function trigger
[FunctionName("CompareImages")]
public async Task Run([BlobTrigger("uploads/{name}")]Stream file) {
    await _imageService.CompareAsync(file);
}`,
  },
  {
    id: "cas-platform",
    title: "CAS Platform",
    image: casImg,
    description:
      "Credit Approval System for DSK Bank — a microservice ecosystem ensuring secure and performant credit card processing via event-driven architecture and Azure Service Bus.",
    snippet: `// MediatR handler example
public class SubmitDraftHandler : IRequestHandler<SubmitDraftCommand>
{
    public async Task<Unit> Handle(SubmitDraftCommand cmd, CancellationToken ct)
    {
        await _publisher.PublishAsync(new DraftSubmitted(cmd.Id));
        return Unit.Value;
    }
}`,
  },
];

export default function ProjectsPage() {
  const refs = useRef({});

  const scrollTo = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="projects-page">
      {/* ===== HIGHLIGHTS BAR ===== */}
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
              onClick={() => scrollTo(p.id)}
            >
              <img src={p.image} alt={p.title} />
              <div className="highlight-overlay">
                <h3>{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ===== PROJECT SECTIONS ===== */}
      {projects.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          ref={(el) => (refs.current[p.id] = el)}
          className={`project-section ${i % 2 ? "reverse" : ""}`}
        >
          <motion.div
            className="project-image"
            initial={{ opacity: 0, x: i % 2 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img src={p.image} alt={p.title} />
          </motion.div>

          <motion.div
            className="project-content"
            initial={{ opacity: 0, x: i % 2 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <pre className="code-snippet">
              <code>{p.snippet}</code>
            </pre>
            <motion.a
              href="#"
              className="project-link"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink size={16} /> View Repository
            </motion.a>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
