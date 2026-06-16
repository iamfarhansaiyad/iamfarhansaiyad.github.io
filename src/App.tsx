import { useState } from "react";
import { motion } from "framer-motion";
import farhanPhoto from "@/assets/farhan.webp";
import { projects as projectList, type Project } from "@/data/projects";
import { socials as socialList } from "@/data/socials";
import {
  Github, Linkedin, Twitter, Mail, Globe, Instagram, Facebook, AtSign,
  Menu, X,
  type LucideIcon,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-ambient text-foreground grain-bg overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="text-foreground text-lg font-semibold tracking-tight">
          <span className="text-primary">farhan</span>.saiyad
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden md:flex items-center gap-8 font-mono-label text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#work" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          <a href="https://drive.google.com/file/d/1R268HCsXUeW1PSlvWbBXSEsoHdn126xD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-foreground border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">Resume ↗</a>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="mx-auto max-w-7xl px-6 pb-6 pt-4 space-y-4 font-mono-label text-muted-foreground">
            <a href="#about" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#work" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block rounded-xl px-4 py-3 hover:bg-primary/5 hover:text-primary transition-colors">
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1R268HCsXUeW1PSlvWbBXSEsoHdn126xD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border px-4 py-3 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const lines = [
    { text: "Mobile apps", gradient: false },
    { text: "built with conviction,", gradient: true },
    { text: "shipped at scale.", gradient: false },
  ];
  const iconMap: Record<string, LucideIcon> = {
    Github, Linkedin, Twitter, Mail, Globe, Instagram, Facebook, AtSign,
  };
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.74 0.19 50 / 0.55), transparent 60%)" }} />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.16 75 / 0.5), transparent 60%)" }} />

      <div className="mx-auto max-w-7xl relative grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono-label text-primary mb-8"
          >
            <span className="w-8 h-px bg-primary" />
            Senior Mobile Engineer · Ahmedabad, IN · Available Q3 2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-display font-light text-foreground/90 mb-5"
          >
            Hi, I'm <span className="font-semibold text-gradient">Farhan Saiyad</span>.
          </motion.div>

          <h1 className="font-display text-[12vw] md:text-[7vw] lg:text-[5.5rem] leading-[0.95]">
            {lines.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={"block " + (l.gradient ? "text-gradient" : "")}
              >
                {l.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            I'm the engineer you call when the mobile problem is hard. Swift, SwiftUI, Flutter — I've shipped enterprise SaaS, AI-powered consumer apps, and everything in between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium transition-transform hover:scale-[1.03] glow-mint">
              View Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium text-foreground hover:border-primary hover:text-primary transition-colors">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex items-center gap-3"
          >
            {socialList.map((s) => {
              const IconComponent = iconMap[s.iconName];
              return (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-11 h-11 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  {IconComponent ? <IconComponent size={18} strokeWidth={1.75} /> : <span>{s.platform[0]}</span>}
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl border border-primary/30 p-2 bg-card/40 backdrop-blur glow-mint">
            <div aria-hidden className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 60%, oklch(0.85 0.18 165 / 0.15), transparent 70%)" }} />
            <img
              src={farhanPhoto}
              alt="Farhan Saiyad"
              className="relative w-full aspect-[4/5] object-cover rounded-2xl"
              loading="eager"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-4 md:bottom-6 md:left-6 rounded-xl bg-background/95 border border-border px-4 py-3 font-mono text-xs shadow-2xl backdrop-blur"
            >
              <div className="text-primary">swift • flutter</div>
              <div className="text-muted-foreground">ios / dart / swiftui</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 right-4 md:top-6 md:right-6 rounded-full bg-primary text-primary-foreground px-3.5 py-1.5 font-mono text-[10px] md:text-xs shadow-2xl flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary-foreground/70 animate-pulse" />
              Available Q3 2026
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl mt-20 grid grid-cols-3 gap-6 border-t border-border pt-10">
        <Stat k="5+" l="Years shipping" />
        <Stat k="50K+" l="Downloads driven" />
        <Stat k="20+" l="Apps in production" />
      </div>
    </section>
  );
}

function Stat({ k, l }: { k: string; l: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-display text-4xl md:text-6xl text-gradient">{k}</div>
      <div className="font-mono-label text-muted-foreground mt-2">{l}</div>
    </motion.div>
  );
}

function Marquee() {
  const items = [
    "Swift", "SwiftUI", "UIKit", "Flutter", "Dart", "Objective-C",
    "Clean Architecture", "MVVM", "WebRTC", "Agora", "Core Data",
    "Firebase", "iBeacon / BLE", "In-App Purchases", "XCTest",
  ];
  const doubled = [...items, ...items];
  return (
    <section aria-hidden className="border-y border-border py-6 overflow-hidden bg-secondary/30">
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {doubled.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl flex items-center gap-12 text-foreground/80">
            {t}
            <span className="w-2 h-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-28 md:py-40">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="font-mono-label text-primary">01 / About</div>
          <h2 className="font-display text-4xl md:text-6xl mt-6">
            The craft of <span className="text-gradient">mobile</span>.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I build mobile software the way good software is meant to be built —
            with architecture you can reason about, code paths you can test, and
            interfaces that feel inevitable. Five years across native iOS and
            Flutter, leading enterprise SaaS rollouts and consumer apps with real
            users.
          </p>
          <p>
            Currently a Senior iOS Developer at <span className="text-foreground">iTechnotion</span>,
            where I lead architecture on GPS + iBeacon attendance platforms,
            real-time WebRTC features, and AI-integrated subscription products.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-6 font-mono-label text-foreground">
            <li>— iOS · Swift / SwiftUI / UIKit</li>
            <li>— Flutter · Dart / BLoC / GetX</li>
            <li>— Clean Architecture &amp; MVVM</li>
            <li>— WebRTC, Agora, Jitsi Meet</li>
            <li>— GPS, iBeacon, BLE, background</li>
            <li>— XCTest, XCUITest, CI releases</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    role: "Senior iOS Developer",
    company: "iTechnotion Pvt Ltd",
    period: "Jun 2022 — Present",
    bullets: [
      "Led architecture of scalable enterprise mobile apps across iOS and cross-platform.",
      "Designed SaaS attendance platform with GPS + iBeacon tracking, background-state location.",
      "Built AI-powered features and subscription monetization for consumer apps.",
      "Cut data latency ~30% via WebSockets-based real-time sync. Mentored juniors.",
    ],
  },
  {
    role: "iOS Developer",
    company: "Elsner Technology Pvt Ltd",
    period: "May 2021 — Jun 2022",
    bullets: [
      "Led Objective-C → Swift migration of production Taxi Driver & Customer apps, zero downtime.",
      "Refactored legacy code into modular MVVM, improving testability and performance.",
      "Reduced crashes ~20% via profiling and architecture cleanup.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="font-mono-label text-primary">02 / Experience</div>
          <h2 className="font-display text-4xl md:text-6xl mt-6">
            Five years of <span className="text-gradient">shipping</span>.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-16">
          {experience.map((e, idx) => (
            <motion.article
              key={e.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-border pt-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl md:text-3xl">
                  {e.role} <span className="text-muted-foreground">/ {e.company}</span>
                </h3>
                <div className="font-mono-label text-muted-foreground">{e.period}</div>
              </div>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-primary mt-2 shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="md:col-span-4">
            <div className="font-mono-label text-primary">03 / Projects</div>
          </div>
          <h2 className="md:col-span-8 font-display text-4xl md:text-6xl">
            Apps that earned <span className="text-gradient">their install</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {projectList.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden transition-colors hover:border-primary/30"
    >
      {/* Top image area */}
      <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        <div aria-hidden className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)", backgroundSize: "32px 32px, 48px 48px" }} />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <motion.div
          className="absolute inset-0 grid place-items-center"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-display text-8xl md:text-9xl text-white/90 drop-shadow-2xl select-none">
            {p.glyph}
          </div>
        </motion.div>
        {/* Shimmer on hover */}
        <div aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
          style={{ background: "linear-gradient(110deg, transparent 30%, oklch(1 0 0 / 0.12) 50%, transparent 70%)" }} />
      </div>

      {/* Bottom content area */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
          {p.name}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
          {p.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tags.map((t) => (
            <span key={t} className="text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/30 rounded-full px-2.5 py-1">
              {t}
            </span>
          ))}
        </div>

        {/* Store links */}
        <div className="mt-auto flex flex-wrap gap-3">
          {p.appStoreUrl && p.appStoreUrl !== "#" && (

            <a href={p.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground/8 border border-border hover:border-primary/50 hover:bg-primary/10 px-4 py-2 font-mono text-xs text-foreground hover:text-primary transition-all duration-300"
            >
              <span className="text-sm"></span> App Store
            </a>
          )}
          {p.playStoreUrl && p.playStoreUrl !== "#" && (

            <a href={p.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground/8 border border-border hover:border-primary/50 hover:bg-primary/10 px-4 py-2 font-mono text-xs text-foreground hover:text-primary transition-all duration-300"
            >
              <span className="text-sm">▶</span> Google Play
            </a>
          )}

        </div>
      </div>
    </motion.div>
  );
}

// function Contact() {
//   const iconMap: Record<string, LucideIcon> = {
//     Github, Linkedin, Twitter, Mail, Globe, Instagram, Facebook, AtSign,
//   };

//   return (
//     <section id="contact" className="px-6 md:px-10 py-32 md:py-48 border-t border-border relative overflow-hidden">
//       <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
//            style={{ background: "radial-gradient(circle, oklch(0.85 0.18 165 / 0.6), transparent 60%)" }} />
//       <div className="mx-auto max-w-7xl relative text-center">
//         <div className="font-mono-label text-primary mb-6">04 / Contact</div>
//         <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
//           Have a hard<br />mobile problem?<br />
//           <span className="text-gradient">Let's talk.</span>
//         </h2>
//         <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-10">
//           Open to new roles, freelance projects, and interesting collabs —
//           find me on any platform below, or drop me a direct email.
//         </p>

//       <a  
//           href="mailto:fazusai@ymail.com"
//           className="font-mono text-primary text-lg md:text-2xl border-b border-dashed border-primary/50 hover:border-primary transition-colors pb-0.5"
//         >
//           fazusai@ymail.com
//         </a>

//         <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
//           {socialList.map((s) => {
//             const IconComponent = iconMap[s.iconName];
//             return (

//              <a   key={s.platform}
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={s.platform}
//                 className="w-12 h-12 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
//               >
//                 {IconComponent ? <IconComponent size={18} strokeWidth={1.75} /> : <span className="font-mono text-xs">{s.platform.slice(0, 2).toLowerCase()}</span>}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-32 md:py-48 border-t border-border relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.18 165 / 0.6), transparent 60%)" }} />
      <div className="mx-auto max-w-7xl relative">
        <div className="font-mono-label text-primary mb-10">04 / Contact</div>
        {/* <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.95]"> */}
        <h2 className="font-display text-[12vw] md:text-[7vw] lg:text-[5.5rem] leading-[0.95]">
          Have a hard<br />mobile problem?<br />
          <span className="text-gradient">Let's talk.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-10 border-t border-border pt-10">
          <ContactItem label="Email" value="fazusai@ymail.com" href="mailto:fazusai@ymail.com" />
          <ContactItem label="Phone" value="+91 98985 31984" href="tel:+919898531984" />
          <ContactItem label="LinkedIn" value="iamfarhansaiyad" href="https://linkedin.com/in/iamfarhansaiyad" />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} className="group block border-t border-border md:border-t-0 pt-6 md:pt-0">
      <div className="font-mono-label text-muted-foreground">{label}</div>
      <div className="font-display text-xl md:text-2xl mt-2 group-hover:text-gradient transition-colors">
        {value} <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 font-mono-label text-muted-foreground">
        <div>© 2026 Farhan Saiyad — Ahmedabad, IN</div>
        <div>Designed &amp; built with intention.</div>
      </div>
    </footer>
  );
}