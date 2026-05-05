import { Github, Eye, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "DevFlow",
    description:
      "A full-stack developer Q&A platform inspired by Stack Overflow. Features real-time search, voting, tagging, and markdown support.",
    image: "/images/devflow-qa-platform-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "ShopSphere",
    description:
      "Modern e-commerce storefront with cart management, Stripe payments, and an admin dashboard for inventory control.",
    image: "/images/shopsphere-ecommerce-storefront.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    title: "TaskBoard",
    description:
      "A Kanban-style project management app with drag-and-drop, team collaboration, and real-time updates via WebSockets.",
    image: "/images/taskboard-kanban-project-management.jpg",
    tags: ["React", "Redux", "Express", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "WeatherNow",
    description:
      "A sleek weather dashboard that shows 7-day forecasts, hourly breakdowns, and location-based alerts using OpenWeather API.",
    image: "/images/weathernow-forecast-dashboard.jpg",
    tags: ["Next.js", "Tailwind", "OpenWeather API"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "PortfolioGen",
    description:
      "A no-code portfolio builder that lets developers generate and deploy a personal site in minutes with customizable themes.",
    image: "/images/portfoliogen-website-builder-tool.jpg",
    tags: ["Next.js", "Prisma", "Vercel", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    title: "ChatAI",
    description:
      "An AI-powered chat interface built on top of OpenAI GPT-4 with conversation history, streaming responses, and custom personas.",
    image: "/images/chatai-ai-chat-interface.jpg",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Projects</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Selected Work</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            A handful of projects I&apos;m proud of — from side experiments to production apps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-indigo-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Github size={15} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <Eye size={15} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
          >
            View all projects on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
