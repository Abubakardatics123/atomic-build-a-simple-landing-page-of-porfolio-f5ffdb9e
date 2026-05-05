import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="text-center sm:text-left">
          <p className="text-white font-bold text-lg gradient-text">Alex Morgan</p>
          <p className="text-sm mt-1">
            &copy; {year} Alex Morgan. All rights reserved.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={"#" + item.toLowerCase()}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Back to top */}
        <a
          href="#hero"
          aria-label="Back to top"
          className="flex items-center gap-2 text-sm bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-300 px-4 py-2 rounded-full transition-colors duration-200"
        >
          <ArrowUp size={14} />
          Top
        </a>
      </div>
    </footer>
  );
}
