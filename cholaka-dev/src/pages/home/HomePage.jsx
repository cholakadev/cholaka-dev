import "./HomePage.css";
import profileImage from "../../assets/me.jpg";

export default function HomePage() {

  var highlight = "Senior Engineer or a Software Engineering Team Lead specializing in designing scalable microservice architectures, cloud-native APIs, and high-performance web apps.";
  var aboutInfo = `I’m currently working as a Senior .NET Engineer at DSK Bank, where we
          build mission-critical financial systems using .NET and Microsoft Azure, focusing on the security.
          My passion lies in clean architecture, performance, and automation — from concept to production deployment.`

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I’m <span className="highlight">Georgi Cholakov</span> 👋</h1>
            <p className="hero-subtitle">
              {highlight}
            </p>
            <div className="hero-buttons">
              <a href="/projects" className="btn-primary">View Projects</a>
              <a href="/contact" className="btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={profileImage} alt="Profile" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Me</h2>
        <p>{aboutInfo}</p>
      </section>

      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Imoten Signal</h3>
            <p>
              AI-powered real estate platform that connects users with properties
              matching their search intent using OpenAI-based property analysis.
            </p>
            <a href="/projects/imoten-signal">Learn More →</a>
          </div>

          <div className="project-card">
            <h3>PawPal</h3>
            <p>
              Lost & found pet app using image recognition to match reported
              animals, built with Azure Functions, Notification Hubs, and MongoDB.
            </p>
            <a href="/projects/pawpal">Learn More →</a>
          </div>

          <div className="project-card">
            <h3>CAS Platform</h3>
            <p>
              Credit Approval System built for DSK Bank — a distributed microservice
              ecosystem ensuring secure and performant credit card processing.
            </p>
            <a href="/projects/cas">Learn More →</a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let’s Build Something Great</h2>
        <p>
          Looking for a consultant, lead engineer, or architectural advice?
          Reach out and let’s discuss your next project.
        </p>
        <a href="/contact" className="btn-primary">Contact Me</a>
      </section>
    </div>
  );
}
