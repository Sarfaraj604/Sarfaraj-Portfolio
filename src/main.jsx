import React, { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { useForm } from "@formspree/react";
import { createRoot } from "react-dom/client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  Laptop,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  SearchCheck,
  Server,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";
import heroImage from "./assets/hero-image.jpeg";
import { siteConfig } from "./siteConfig";
import {
  faqs,
  industries,
  processSteps,
  projects,
  reasons,
  services,
  techGroups,
  testimonials,
} from "./siteData";

const HeroScene = lazy(() => import("./three/HeroScene"));

const iconMap = {
  BriefcaseBusiness,
  Rocket,
  Blocks,
  MonitorSmartphone,
  Server,
  Wrench,
  Globe2,
  ShieldCheck,
  Laptop,
  Code2,
  Database,
  SearchCheck,
  Zap,
  CircleDollarSign,
  Layers3,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.title = siteConfig.seo.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", siteConfig.seo.description);
  }, []);

  return (
    <>
      <SeoSchema />
      <div className="min-h-screen overflow-x-hidden bg-ink text-text selection:bg-accent selection:text-white">
        <Background />
        <Navbar />
        <main>
          <Hero />
          <TrustStrip />
          <About />
          <Services />
          <Industries />
          <Projects onOpenProject={setActiveProject} />
          <TechStack />
          <Process />
          <WhyWorkWithMe />
          <Pricing />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.seo.description,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "IN",
    },
    url: siteConfig.seo.canonicalUrl,
    email: siteConfig.email,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function Background() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,92,255,0.18),transparent_30%),radial-gradient(circle_at_78%_8%,rgba(32,217,195,0.11),transparent_25%),linear-gradient(180deg,#08090D_0%,#0B0D12_48%,#08090D_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="noise absolute inset-0 opacity-[0.07]" />
    </div>
  );
}
function navigateToSection(id) {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.history.replaceState({}, "", `/${id}`);
}
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const current = siteConfig.nav
        .map((item) => document.querySelector(item.href))
        .filter(Boolean)
        .findLast((section) => section.getBoundingClientRect().top <= 130);
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-white/10 bg-ink/72 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => navigateToSection("home")}
          className="group flex items-center gap-3"
        >
          <span className="group relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-[#10111a] shadow-glow transition-all duration-300 hover:scale-105 hover:border-accent/50">
            <span className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-aqua/10 opacity-70" />

            <svg
              viewBox="0 0 40 40"
              className="relative h-7 w-7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="SA"
            >
              <path
                d="M27 10H16.5C12.9 10 10 12.9 10 16.5C10 20.1 12.9 23 16.5 23H23.5C27.1 23 30 25.9 30 29.5C30 33.1 27.1 36 23.5 36H13"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M17 34L23.5 14L30 34M19.5 27H27.5"
                stroke="url(#saGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <defs>
                <linearGradient id="saGradient" x1="17" y1="14" x2="30" y2="34">
                  <stop stopColor="#7c5cff" />
                  <stop offset="1" stopColor="#20d9c3" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>
            <span className="block text-sm font-semibold leading-tight">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-muted">Web Developer</span>
          </span>
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => navigateToSection(item.href.slice(1))}
              className={`rounded-full px-4 py-2 text-sm transition hover:text-white ${
                active === item.href.slice(1)
                  ? "bg-white/[0.06] text-white"
                  : "text-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="hidden lg:block">
          <MagneticButton onClick={() => navigateToSection("contact")}>
            Start a Project
          </MagneticButton>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-5 mb-4 rounded-xl border border-white/10 bg-panel/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {siteConfig.nav.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => {
                  navigateToSection(item.href.slice(1));
                  setOpen(false);
                }}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm text-muted hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                navigateToSection("contact");
                setOpen(false);
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
            >
              Start a Project <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 overflow-hidden px-5 pb-16 pt-32 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pt-28"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="relative z-10 min-w-0 max-w-[calc(100vw-2.5rem)] lg:max-w-none"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-muted"
        >
          <span className="h-2 w-2 rounded-full bg-aqua shadow-[0_0_16px_rgba(32,217,195,0.8)]" />
          Available for freelance projects
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="max-w-[calc(100vw-2.5rem)] break-words text-[clamp(1.95rem,8.8vw,6.9rem)] font-semibold leading-[0.98] tracking-normal lg:max-w-4xl lg:leading-[0.94]"
        >
          Websites that make businesses look as good as they are.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-[calc(100vw-2.5rem)] text-base leading-8 text-muted md:max-w-2xl md:text-xl"
        >
          I design and build fast, modern, conversion-focused websites for
          businesses, creators and growing brands.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <MagneticButton onClick={() => navigateToSection("contact")}>
            Start a Project
          </MagneticButton>
          <button
            onClick={() => navigateToSection("work")}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.05] sm:w-auto"
          >
            View My Work <ArrowRight size={17} />
          </button>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-2">
            <Globe2 size={16} /> Based in Kolkata
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-muted/60 sm:block" />
          <span>Working with clients worldwide</span>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y }}
        className="relative min-h-[360px] min-w-0 lg:min-h-[620px]"
      >
        <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/[0.025] shadow-glow" />
        <Suspense
          fallback={
            <div className="grid h-full min-h-[360px] place-items-center text-muted">
              Loading 3D preview
            </div>
          }
        >
          <HeroScene />
        </Suspense>
      </motion.div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-panel/45 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 lg:flex-row lg:items-center lg:px-8">
        <p className="text-sm font-medium text-muted">
          Built with modern technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {siteConfig.trustTech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/86"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, children, align = "left" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={`mb-10 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-aqua">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-base leading-7 text-muted md:text-lg">
          {children}
        </p>
      )}
    </motion.div>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(124,92,255,0.2),rgba(32,217,195,0.08)),#151821] p-3">
            <img
              src={heroImage}
              alt="Sarfaraj Ansari portrait"
              className="h-full w-full rounded-xl object-cover object-[50%_70%]"
              loading="lazy"
            />
          </div>
        </motion.div>
        <div>
          <SectionHeader
            eyebrow="About"
            title="A developer who understands product, performance and trust."
          >
            I am Sarfaraj Ansari, a BTech graduate from Electronics and
            Communication Engineering with a full-stack development focus. I
            build MERN stack websites and applications that feel polished, load
            quickly, and make the next step obvious for the visitor.
          </SectionHeader>
          <p className="text-lg leading-8 text-muted">
            My engineering background and DSA practice shape how I solve
            problems: break the business goal down, choose the right technical
            path, and ship something maintainable. The aim is not just a clean
            interface; it is a website your business can confidently send to
            real customers.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="Web development services for businesses that need to look credible online."
      >
        From a sharp local business website to a custom web application, each
        build is planned around clarity, speed, mobile usability and conversion.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <FeatureCard key={service.title} item={service} index={index} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ item, index }) {
  const Icon = iconMap[item.icon] || Code2;
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ delay: index * 0.03 }}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      className="group rounded-2xl border border-white/10 bg-card/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition hover:border-accent/50"
    >
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-aqua">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="mt-3 leading-7 text-muted">{item.description}</p>
      {item.points && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.points.map((point) => (
            <span
              key={point}
              className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-muted"
            >
              {point}
            </span>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => navigateToSection("contact")}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
      >
        Learn more{" "}
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </button>
    </motion.article>
  );
}

function Industries() {
  return (
    <Section id="industries" className="bg-panel/35">
      <SectionHeader
        eyebrow="Industries"
        title="Websites built for real businesses."
      >
        Local business websites need to answer practical customer questions
        quickly: what you offer, why to trust you, where you are, and how to
        contact you.
      </SectionHeader>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((industry) => (
          <motion.article
            key={industry.name}
            whileHover={{ y: -5 }}
            className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
          >
            <p className="font-semibold">{industry.name}</p>
            <p className="mt-2 text-sm text-aqua">{industry.concept}</p>
            <p className="mt-3 text-sm leading-6 text-muted">
              {industry.description}
            </p>
          </motion.article>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-card/70 p-6 md:flex md:items-center md:justify-between">
        <p className="text-xl font-semibold">
          Have a different business? Let's talk.
        </p>
        <button
          type="button"
          onClick={() => navigateToSection("contact")}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink md:mt-0"
        >
          Request a Quote <ArrowRight size={16} />
        </button>
      </div>
    </Section>
  );
}

function Projects({ onOpenProject }) {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Selected Work"
        title="Interactive builds with full-stack thinking."
      >
        Explore some of the websites and applications I've designed and
        developed using modern full-stack technologies.
      </SectionHeader>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-card/80"
          >
            <button
              type="button"
              onClick={() => onOpenProject(project)}
              className="block w-full text-left"
            >
              <ProjectVisual label={project.label} image={project.image} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white">
                    Case Study{" "}
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                    GitHub <Code2 size={15} />
                  </span>
                </div>
              </div>
            </button>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function ProjectVisual({ label, image }) {
  return (
    <div className="group relative aspect-[1.45] overflow-hidden border-b border-white/10 bg-black">
      <img
        src={image}
        alt={`${label} project screenshot`}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />

      <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
        {label}
      </span>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-panel p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-aqua">
              Project outcome
            </p>
            <h3 className="mt-2 text-3xl font-semibold">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Problem",
            "Solution",
            "Features",
            "Technology",
            "Architecture",
            "Challenges",
            "Result",
          ].map((heading) => (
            <div
              key={heading}
              className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
            >
              <p className="font-semibold">{heading}</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.caseStudy[heading.toLowerCase()]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl || "#contact"}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
          >
            {project.liveUrl ? "Live Demo" : "View Project"}{" "}
            <ExternalLink size={15} />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-white"
            >
              GitHub <Code2 size={15} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function TechStack() {
  return (
    <Section id="skills" className="bg-panel/35">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Modern tools, organized around real delivery."
      >
        The stack stays practical: strong frontend, reliable backend, deployable
        infrastructure and the tools needed to debug quickly.
      </SectionHeader>
      <div className="grid gap-4 lg:grid-cols-5">
        {techGroups.map((group) => (
          <motion.div
            key={group.title}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-white/10 bg-card/70 p-5"
          >
            <p className="font-semibold text-aqua">{group.title}</p>
            <div className="mt-5 grid gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-white/[0.045] px-3 py-2 text-sm text-white/86"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="Process"
        title="A clear path from business requirement to deployed website."
      />
      <div className="relative grid gap-4">
        <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-white/10 md:block" />
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[4rem_1fr]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-accent text-sm font-bold">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function WhyWorkWithMe() {
  return (
    <Section id="why" className="bg-panel/35">
      <SectionHeader
        eyebrow="Why Work With Me"
        title="Built for the way business owners actually use websites."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <FeatureCard key={reason.title} item={reason} index={index} />
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        eyebrow="Testimonials"
        title="What people say about working with me."
        align="center"
      >
        A few words from people I've worked with on projects, development and
        technical work.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-white/10 bg-card/70 p-6"
          >
            <p className="text-lg leading-8 text-white/88">"{item.quote}"</p>
            <p className="mt-6 font-semibold">{item.name}</p>
            <p className="text-sm text-muted">{item.role}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  return (
    <Section id="faq" className="bg-panel/35">
      <SectionHeader
        eyebrow="FAQ"
        title="Straight answers before a project starts."
      />
      <div className="grid gap-3 lg:grid-cols-2">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} faq={faq} />
        ))}
      </div>
    </Section>
  );
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.035]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        {faq.question}
        <ChevronDown
          size={18}
          className={`shrink-0 transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-5 pb-5 leading-7 text-muted"
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple starting points, with real scope discussed before build."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {siteConfig.pricing.map((tier) => (
          <motion.article
            key={tier.name}
            whileHover={{ y: -7 }}
            className={`rounded-2xl border p-6 ${tier.featured ? "border-accent/60 bg-accent/10 shadow-glow" : "border-white/10 bg-card/70"}`}
          >
            <p className="text-xl font-semibold">{tier.name}</p>
            <p className="mt-3 text-muted">{tier.description}</p>
            <p className="mt-6 text-3xl font-semibold">{tier.price}</p>
            <div className="mt-6 grid gap-3">
              {tier.features.map((feature) => (
                <p key={feature} className="flex gap-3 text-sm text-white/84">
                  <Check size={17} className="mt-0.5 text-aqua" /> {feature}
                </p>
              ))}
            </div>
            <button
              type="button"
              onClick={() => navigateToSection("contact")}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-ink"
            >
              Discuss This Tier <ArrowRight size={16} />
            </button>
          </motion.article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-muted">
        Domain, hosting, third-party services and optional maintenance are
        quoted separately unless included in the agreed scope.
      </p>
    </Section>
  );
}

function Contact() {
  const [state, handleSubmit, reset] = useForm("xnpawjoa");

  return (
    <Section id="contact" className="bg-panel/35">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT SIDE */}
        <div>
          <SectionHeader eyebrow="Contact" title="Have a project in mind?">
            Tell me what you're building, and I'll help you figure out the right
            approach.
          </SectionHeader>

          <div className="grid gap-3">
            <ContactLink
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                siteConfig.whatsapp.message,
              )}`}
              icon={MessageCircle}
              label="WhatsApp"
              value="Start a conversation"
            />

            <ContactLink
              href={`mailto:${siteConfig.email}`}
              icon={Mail}
              label="Email"
              value={siteConfig.email}
            />

            <ContactLink
              href={siteConfig.social.linkedin}
              icon={BriefcaseBusiness}
              label="LinkedIn"
              value="Professional profile"
            />

            <ContactLink
              href={siteConfig.social.github}
              icon={Code2}
              label="GitHub"
              value="Code portfolio"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-2xl border border-white/10 bg-card/80 p-5 md:p-7">
          {state.succeeded ? (
            /* SUCCESS MESSAGE */
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                <svg
                  className="h-8 w-8 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Message Sent Successfully!
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                Thank you for reaching out. I've received your enquiry and will
                get back to you as soon as possible.
              </p>

              <button
                type="button"
                onClick={reset}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* FORM */
            <form onSubmit={handleSubmit}>
              {/* Honeypot spam protection */}
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-4 md:grid-cols-2">
                {/* NAME */}
                <Input label="Name" name="name" required />

                {/* BUSINESS */}
                <Input label="Business Name" name="business" required />

                {/* EMAIL */}
                <Input label="Email" type="email" name="email" required />

                {/* PHONE */}
                <Input
                  label="Phone / WhatsApp"
                  name="phone"
                  type="tel"
                  required
                />

                {/* BUSINESS TYPE */}
                <Select
                  label="Business Type"
                  name="type"
                  options={siteConfig.businessTypes}
                  required
                />

                {/* BUDGET */}
                <Input
                  label="Budget"
                  name="budget"
                  placeholder="Example: ₹15k - ₹50k"
                  required
                />

                {/* WHAT THEY NEED */}
                <Input
                  label="What do you need?"
                  name="need"
                  className="md:col-span-2"
                  placeholder="Website, landing page, web app, redesign..."
                  required
                />

                {/* MESSAGE */}
                <label className="md:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-white/88">
                    Message
                  </span>

                  <textarea
                    name="message"
                    required
                    minLength={10}
                    className="min-h-32 w-full resize-y rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none transition placeholder:text-muted/70 focus:border-accent"
                    placeholder="Share a few details about your project."
                  />
                </label>
              </div>

              {/* FORM ERROR */}
              {state.errors && (
                <div
                  role="alert"
                  className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  <p className="font-medium">Unable to send your message.</p>

                  <p className="mt-1 text-red-300/80">
                    Please check your details and try again. If the problem
                    continues, contact me directly through WhatsApp or email.
                  </p>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={state.submitting}
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white transition hover:bg-[#6d50e8] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              <p className="mt-3 text-xs leading-5 text-muted">
                Your information is sent securely through Formspree and is used
                only to respond to your enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Input({ label, className = "", ...props }) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-medium text-white/88">
        {label}
      </span>
      <input
        {...props}
        className="h-12 w-full rounded-lg border border-white/10 bg-ink/70 px-4 text-white outline-none transition placeholder:text-muted/70 focus:border-accent"
      />
    </label>
  );
}

function Select({ label, options, ...props }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-medium text-white/88">
        {label}
      </span>
      <select
        {...props}
        className="h-12 w-full rounded-lg border border-white/10 bg-ink/70 px-4 text-white outline-none transition focus:border-accent"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function ContactLink({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-accent/50"
    >
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-aqua">
        <Icon size={20} />
      </span>
      <span>
        <span className="block font-semibold">{label}</span>
        <span className="text-sm text-muted">{value}</span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-2xl font-semibold">{siteConfig.name}</p>
          <p className="mt-2 text-muted">Web Developer</p>
          <p className="mt-4 text-sm text-muted">
            Designed & built with React.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-wrap gap-3">
            {["Services", "Work", "About", "Contact"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => navigateToSection(item.toLowerCase())}
                className="text-sm text-muted hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition hover:text-white"
              >
                WhatsApp
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted transition hover:text-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-muted">
        © 2026 {siteConfig.name}
      </p>
    </footer>
  );
}

function FloatingWhatsApp() {
  const href = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-13 w-13 place-items-center rounded-full border border-white/10 bg-aqua text-ink shadow-[0_16px_50px_rgba(32,217,195,0.35)] transition hover:scale-105"
    >
      <MessageCircle size={24} />
    </a>
  );
}

function MagneticButton({ href, onClick, children }) {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      onClick={onClick}
      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6d50e8] hover:shadow-[0_0_30px_rgba(124,92,255,0.35)] sm:w-auto"
    >
      {children} <ArrowRight size={17} />
    </motion.a>
  );
}

function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative px-5 py-20 lg:px-8 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
