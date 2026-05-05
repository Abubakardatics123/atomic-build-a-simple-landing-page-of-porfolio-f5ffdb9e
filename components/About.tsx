import { User } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
  { value: "8", label: "Open Source Repos" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100 border-4 border-white">
                <img
                  src="/images/developer-profile-portrait.jpg"
                  alt="Alex Morgan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                <User size={14} />
                Full-Stack Dev
              </div>
              {/* Decorative ring */}
              <div className="absolute -top-4 -left-4 w-72 h-72 rounded-3xl border-2 border-indigo-100 -z-10" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Building digital products with purpose
            </h3>
            <p className="text-slate-500 leading-relaxed mb-4">
              I&apos;m a full-stack developer based in San Francisco, CA, with a passion for building clean, user-centric web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me hiking trails, experimenting with photography, or contributing to open-source projects. I believe great software is built at the intersection of engineering rigor and thoughtful design.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm"
                >
                  <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
