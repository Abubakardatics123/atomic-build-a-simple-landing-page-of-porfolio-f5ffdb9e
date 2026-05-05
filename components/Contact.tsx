import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
    color: "hover:bg-slate-900 hover:text-white hover:border-slate-900",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "hover:bg-indigo-600 hover:text-white hover:border-indigo-600",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    color: "hover:bg-sky-500 hover:text-white hover:border-sky-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Section header */}
        <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">Contact</span>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">Let&apos;s Work Together</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          Have a project in mind or just want to say hello? My inbox is always open. I&apos;ll do my best to get back to you within 24 hours.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:alex@example.com"
          className="inline-flex items-center gap-3 bg-indigo-600 text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-xl shadow-indigo-200 mb-12"
        >
          <Mail size={20} />
          alex@example.com
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-slate-100" />
          <span className="text-slate-400 text-sm font-medium">or find me on</span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          {socials.map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={"flex items-center gap-2 border border-slate-200 text-slate-600 font-semibold px-5 py-2.5 rounded-full transition-all duration-200 " + color}
            >
              <Icon size={18} />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
