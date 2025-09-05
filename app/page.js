"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
                  <span className="block">Hi, I'm</span>
                  <span className="hero-gradient bg-clip-text text-transparent">
                    Alex Johnson
                  </span>
                </h1>
                <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  <p className="mb-2">Full Stack Developer</p>
                  <p className="text-lg">React.js • Node.js • TypeScript</p>
                </div>

                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  I craft exceptional digital experiences with modern technologies.
                  Passionate about clean code, user experience, and solving complex problems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="hero-gradient text-primary-foreground hover:glow-strong transition-smooth group"
                  >
                    Hire Me
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/50 hover:border-primary hover:glow transition-smooth"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    View Resume
                  </Button>
                </div>
              </div>

            </div>
          </section>


          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-soft">
              View Projects <ArrowRight size={18} />
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-gray-200 dark:border-gray-700">
              Read Blog
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-4 text-gray-600 dark:text-gray-300">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:opacity-80"><Github /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:opacity-80"><Linkedin /></a>
            <a href="mailto:hello@example.com" className="hover:opacity-80"><Mail /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl overflow-hidden shadow-soft bg-gray-50 dark:bg-gray-800 aspect-video" />
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm underline">See all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard title="Finance Manager" description="Track expenses, bills & loans with real‑time charts." stack={["Next.js", "Node.js", "MySQL", "Tailwind"]} />
          <ProjectCard title="E‑commerce Store" description="Cart, orders, payments & admin dashboard." stack={["Next.js", "Express", "MySQL", "Redis"]} />
          <ProjectCard title="Time Management App" description="Pomodoro, tasks, calendar & progress stats." stack={["React", "LocalStorage", "Tailwind"]} />
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, stack }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-soft transition">
      <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-900 mb-4" />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="text-xs border border-gray-200 dark:border-gray-700 rounded-full px-2 py-1">{s}</span>
        ))}
      </div>
    </div>
  );
}
