import "./HomePage.css";
import profileImage from "../../assets/me.jpg";
import FeaturedProjects from "../../components/projects/FeaturedProjects";

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
        <FeaturedProjects />
      </section>
    </div>
  );
}
