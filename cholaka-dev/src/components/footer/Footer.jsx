import "./Footer.css";
import awsLogo from "../../assets/aws.svg";
import openshiftLogo from "../../assets/openshift.svg";

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", logo: awsLogo },
  { name: "OpenShift", logo: openshiftLogo },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Kibana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kibana/kibana-original.svg" },
];

const Footer = () => {
  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee">
        {[...technologies, ...technologies].map((tech, i) => (
          <div key={i} className="tech-item">
            <img src={tech.logo} alt={tech.name} title={tech.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;