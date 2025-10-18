import "./ExperienceTimeline.css";

/** ——— Data (easy to edit/reorder) ——— */
const roles = [
  {
    company: "DSK Bank",
    title: "Senior .NET Developer",
    location: "Sofia, Bulgaria",
    period: "Jun 2025 — Present",
    summary:
      "Building high-throughput, secure banking services with a focus on clean architecture, performance, and observability.",
    highlights: [
      "Versioned APIs and feature flags across microservices (.NET 8, MediatR).",
      "Latency/throughput tuning with App Insights + K6; SLO dashboards.",
      "Hard pre-approved offers and identity/KYC flows (Azure Functions, Key Vault).",
    ],
    stack: [
      ".NET 8", "ASP.NET Web API", "Azure (Functions, App Services, KV)",
      "MediatR", "MongoDB/SQL", "K6", "Serilog", "Redis"
    ],
  },

  {
    company: "PayRetailers",
    title: "Software Engineering Team Lead",
    location: "Sofia, Bulgaria",
    period: "Jul 2024 — Apr 2025",
    summary:
      "Led 6 senior engineers; owned ceremonies, cross-team initiatives, and architectural decisions for the Kuady wallet.",
    highlights: [
      "Designed notification microservice used by all domains (Azure Functions + Service Bus).",
      "Delivered secure P2P transfers; cut incident time via structured logging & runbooks.",
      "Instituted backlog/roadmap hygiene and engineering KPIs for predictable delivery.",
    ],
    stack: [
      "ASP.NET Core", "Azure Service Bus", "Azure Functions",
      "Cosmos DB", "PostgreSQL", "Redis", "MongoDB", "EF Core"
    ],
  },

  {
    company: "PayRetailers",
    title: "Software Developer",
    location: "Sofia, Bulgaria • Hybrid",
    period: "Mar 2024 — Jul 2024",
    summary:
      "Platform work on Kuady: domain services, data stores, and integration contracts.",
    highlights: [
      "Co-owned P2P transfers domain; designed idempotent command handlers.",
      "Telemetry-first services; correlation IDs, dashboards, alert rules.",
      "Hardening of CI/CD with env-specific configs & secret management.",
    ],
    stack: [
      "ASP.NET Core", "MongoDB", "Cosmos DB", "PostgreSQL",
      "Azure Functions", "Service Bus", "Redis", "EF Core"
    ],
  },

  {
    company: "MentorMate",
    title: "Software Developer",
    location: "Sofia, Bulgaria",
    period: "May 2022 — Mar 2024",
    summary:
      "Worked on two cloud products: MasterAtlas (Azure) and Offer Wall (AWS).",
    highlights: [
      "MasterAtlas: telemetry & logistics for concrete industry; Azure Functions + Service Bus + real-time notifications.",
      "Offer Wall: microservices on AWS; CQRS split; robust unit test suite and contracts with third-party providers.",
      "Improved data pipelines & fault handling; reduced message DLQs with retries/backoff.",
    ],
    stack: [
      "ASP.NET Core", "React", "MediatR", "Azure Functions",
      "Service Bus", "Redis", "AWS", "EF Core", "Unit Testing"
    ],
  },

  {
    company: "Nemetschek Bulgaria",
    title: "Junior Software Developer",
    location: "Sofia, Bulgaria",
    period: "Nov 2020 — May 2022",
    summary:
      "Facility-management web app across WCF + ASP.NET MVC + Angular; both server and client responsibilities.",
    highlights: [
      "REST services, unit tests, SQL stored procedures, SSRS reports.",
      "Custom PrimeNG components; IIS configs; mentored interns.",
      "Auth hardening with AD/JWT; improved access control patterns.",
    ],
    stack: [ "Angular", "C#", "ASP.NET MVC", "WCF", "SQL Server", "SSRS" ],
  },

  {
    company: "Nemetschek Bulgaria",
    title: "Junior Software Developer (Intern)",
    location: "Sofia, Bulgaria",
    period: "Aug 2020 — Nov 2020",
    summary:
      "Parking-management app; focused on server-side best practices and SOLID.",
    highlights: [
      "WCF REST services, MVC, MSSQL; AD integration & JWT authentication."
    ],
    stack: [ "Angular", "ASP.NET MVC", "WCF", "MSSQL" ],
  },

  {
    company: "MentorMate",
    title: "Software Development Trainee (Internship)",
    location: "Plovdiv, Bulgaria",
    period: "Mar 2020 — Jun 2020",
    summary:
      "Intro to professional dev: Angular + C# + ASP.NET Web API + OOP patterns.",
    highlights: [ "Capstone tasks across API + UI; code reviews and demos." ],
    stack: [ "Angular", "C#", "ASP.NET Web API", "ASP.NET MVC" ],
  },

  {
    company: "TTEC",
    title: "Technical Support Specialist",
    location: "Bulgaria",
    period: "Sep 2019 — Mar 2020",
    summary:
      "Customer-facing technical troubleshooting; communication and incident triage.",
    highlights: [ "Built foundation in customer empathy and SLA discipline." ],
    stack: [ "Support", "Troubleshooting", "SLA", "Communication" ],
  },
];

/** ——— UI ——— */
export default function ExperienceTimeline() {
  return (
    <section className="xp-section card">
      <h2>Experience</h2>

      <div className="xp-timeline">
        {roles.map((r, idx) => (
          <article key={idx} className="xp-item">
            <div className="xp-line" />
            <div className="xp-dot" />

            <header className="xp-header">
              <h3 className="xp-title">{r.title}</h3>
              <div className="xp-meta">
                <span className="xp-company">{r.company}</span>
                <span className="xp-sep">•</span>
                <span>{r.location}</span>
                <span className="xp-sep">•</span>
                <span className="xp-period">{r.period}</span>
              </div>
            </header>

            <p className="xp-summary">{r.summary}</p>

            <ul className="xp-highlights">
              {r.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="xp-stack">
              {r.stack.map((t) => (
                <span key={t} className="xp-badge">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
