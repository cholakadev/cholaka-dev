import "./AboutPage.css";
import { Mail, MapPin, Briefcase, Download } from "lucide-react";
import profileImage from "../../assets/me.jpg";
import ExperienceTimeline from "../../components/experience/ExperienceTimeline";

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* HERO / INTRO */}
      <section className="about-hero card">
        <img src={profileImage} alt="Georgi Cholakov" className="about-avatar" />
        <div className="about-hero-text">
          <h1>About <span className="accent">Me</span></h1>
          <p>
            Software Engineering Team Lead focused on scalable cloud architectures,
            clean APIs, and developer experience. I enjoy designing resilient systems,
            putting observability first, and shipping value with pragmatic automation.
          </p>
          <div className="about-hero-actions">
            <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noreferrer">
              <Download size={18} /> Download Resume
            </a>
            <a href="/contact" className="btn-outline">
              <Mail size={18} /> Contact
            </a>
          </div>
          <div className="about-hero-meta">
            <span><MapPin size={16} /> Sofia, Bulgaria</span>
            <span><Briefcase size={16} /> Engineering Team Lead • .NET & Azure</span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / STATS */}
      <section className="about-stats">
        <div className="stat-card">
          <div className="stat-number">5+ yrs</div>
          <div className="stat-label">Professional Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">Azure • .NET</div>
          <div className="stat-label">Cloud & Backend Focus</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">Perf/Obs</div>
          <div className="stat-label">Kibana • App Insights • Grafana</div>
        </div>
      </section>

      <ExperienceTimeline />

      {/* CTA */}
      <section className="about-cta card">
        <h2>Let’s Collaborate</h2>
        <p>
          Need architecture guidance, performance tuning, or a roadmap to production?
          I’m happy to help.
        </p>
        <a href="/contact" className="btn-primary">Get in Touch</a>
      </section>
    </div>
  );
}
