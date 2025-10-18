import { useState } from "react";
import "./ContactPage.css";
import { Mail, Linkedin, Github } from "lucide-react";

const CONTACT = {
  email: "cholakovge@gmail.com",
  linkedin: "https://www.linkedin.com/in/cholakovge",
  github: "https://github.com/cholakadev",
};

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      console.log("Failed to copy email.");
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-head card">
        <div className="contact-head-text">
          <h1>Let’s get in touch</h1>
          <p>
            Open for part-time backend roles, architecture consultancy, and software development collaborations.
Let’s connect and turn your ideas into production-ready systems.
          </p>
        </div>

        <div className="contact-cards">
          {/* EMAIL */}
          <a
            href={`mailto:${CONTACT.email}`}
            className={`contact-card email-card ${copied ? "copied" : ""}`}
            data-copied={copied ? "Copied!" : ""}
            onClick={copyEmail}
          >
            <Mail className="cc-icon" />
            <div className="cc-body">
              <span className="cc-title">Email</span>
              <span className="cc-value">{CONTACT.email}</span>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            className="contact-card"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <Linkedin className="cc-icon" />
            <div className="cc-body">
              <span className="cc-title">LinkedIn</span>
              <span className="cc-value">/in/cholakovge</span>
            </div>
          </a>

          {/* GITHUB */}
          <a
            className="contact-card"
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <Github className="cc-icon" />
            <div className="cc-body">
              <span className="cc-title">GitHub</span>
              <span className="cc-value">github.com/cholakadev</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
