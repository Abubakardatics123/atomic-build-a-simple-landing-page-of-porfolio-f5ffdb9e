const skillGroups = [
  {
    category: "Frontend",
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    category: "Backend",
    color: "bg-violet-50 text-violet-700 border-violet-100",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"],
  },
  {
    category: "Tools & DevOps",
    color: "bg-sky-50 text-sky-700 border-sky-100",
    skills: ["Git", "Docker", "Vercel", "AWS", "Figma", "Jest"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Skills</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">What I Work With</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            A curated set of technologies I use to build modern, scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={"text-sm font-semibold px-3 py-1.5 rounded-full border " + group.color}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[
            { name: "React / Next.js", pct: 95 },
            { name: "TypeScript", pct: 90 },
            { name: "Node.js / Express", pct: 85 },
            { name: "UI/UX Design", pct: 80 },
          ].map((item) => (
            <div key={item.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">{item.name}</span>
                <span className="text-sm font-bold text-indigo-600">{item.pct}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                  style={{ width: item.pct + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
