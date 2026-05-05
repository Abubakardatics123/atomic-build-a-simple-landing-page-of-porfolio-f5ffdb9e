"use client";

import { ArrowDown, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-indigo-100">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
          Available for freelance work
        </span>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Alex Morgan</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-500 font-medium mb-4 max-w-xl">
          Full-Stack Developer &amp; UI/UX Enthusiast
        </p>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          I craft beautiful, performant web experiences that users love. Specializing in React, Next.js, and modern design systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-white text-slate-800 font-semibold px-8 py-3.5 rounded-full border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors duration-200 shadow-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-800 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-indigo-500 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
