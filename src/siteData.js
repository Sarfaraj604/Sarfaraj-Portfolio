import chatProjectImage from "./assets/image.png";
import bookstoreProjectImage from "./assets/online-book-store-image.png";
import encryptionProjectImage from "./assets/encryption-image.png";
export const services = [
  {
    icon: "BriefcaseBusiness",
    title: "Business Websites",
    description: "Professional responsive websites for local businesses that need credibility, clear information and fast enquiry paths.",
    points: ["Travel", "Restaurants", "Gyms", "Salons", "Real estate"],
  },
  {
    icon: "Rocket",
    title: "Landing Pages",
    description: "Focused pages for products, services, campaigns and ads with persuasive structure and clean conversion flow.",
    points: ["Products", "Services", "Campaigns", "Ads"],
  },
  {
    icon: "Blocks",
    title: "Full-Stack Web Applications",
    description: "Custom MERN applications with APIs, authentication, databases and interfaces built around real workflows.",
    points: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: "MonitorSmartphone",
    title: "Website Redesign",
    description: "Modernize outdated sites with better UI, mobile responsiveness, performance and user experience.",
    points: ["UI", "Mobile", "Performance", "UX"],
  },
  {
    icon: "Server",
    title: "Deployment & Maintenance",
    description: "Domain configuration, hosting setup, SSL, environment variables, deployment and ongoing care.",
    points: ["Domain", "Hosting", "SSL", "Maintenance"],
  },
  {
    icon: "Wrench",
    title: "Bug Fixing & Optimization",
    description: "Fix UI problems, responsive issues, API errors, deployment blockers and performance bottlenecks.",
    points: ["UI bugs", "API issues", "Deployment", "Speed"],
  },
];

export const industries = [
  { name: "Travel & Tourism", concept: "Trip enquiry website", description: "Packages, destinations, galleries and WhatsApp-led enquiries." },
  { name: "Restaurants & Cafes", concept: "Menu and booking site", description: "Food photos, menu highlights, location and reservation prompts." },
  { name: "Coaching Institutes", concept: "Admissions website", description: "Courses, outcomes, faculty, batches and enquiry forms." },
  { name: "Gyms & Fitness", concept: "Membership site", description: "Plans, trainers, facilities, trial class CTAs and schedules." },
  { name: "Salons", concept: "Service booking site", description: "Services, pricing, gallery, location and appointment requests." },
  { name: "Photographers", concept: "Portfolio website", description: "Visual galleries, packages, testimonials and booking flows." },
  { name: "Real Estate", concept: "Property showcase", description: "Listings, amenities, maps, lead capture and brochure requests." },
  { name: "Interior Design", concept: "Project showcase", description: "Case-study style rooms, services, process and consultations." },
  { name: "Hotels", concept: "Stay enquiry website", description: "Rooms, amenities, nearby places and direct booking prompts." },
  { name: "Local Businesses", concept: "Credibility website", description: "What you do, why trust you, location, proof and contact." },
];

export const projects = [
  {
    title: "AI-Powered Real-Time Language Translator Chat",
    image: chatProjectImage,
    label: "Realtime AI Chat",
    description: "A multilingual chat experience with real-time messaging, authentication and translation-assisted conversations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "AI API"],
    liveUrl: "https://chat-app-sarfuj.netlify.app/login",
    githubUrl: "https://github.com/Sarfaraj604/Chat-App",
    caseStudy: {
      problem: "Users needed real-time conversations that could support multilingual communication without breaking chat flow.",
      solution: "Built a socket-based chat system with authentication and AI-assisted translation layered into the message experience.",
      features: "Real-time chat, authentication, multilingual translation, online and offline status.",
      technology: "React frontend, Node and Express API, MongoDB persistence, Socket.IO events and AI API integration.",
      architecture: "Client events communicate through Socket.IO, backend services handle auth and message persistence, translation runs through a dedicated API path.",
      challenges: "Keeping translation useful without slowing the perceived speed of real-time messaging.",
      result: "A technical project outcome demonstrating full-stack architecture, realtime state and AI integration.",
    },
  },
  {
    title: "Online Book Store",
    image: bookstoreProjectImage,
    label: "Commerce Flow",
    description: "An e-commerce style bookstore with catalogue browsing, cart flow, user authentication and payment integration planning.",
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    liveUrl: "https://saifbookstore.netlify.app/",
    githubUrl: "https://github.com/Sarfaraj604/Online-Book-Store",
    caseStudy: {
      problem: "A book store needs catalogue discovery, clean cart behavior and a trustworthy checkout experience.",
      solution: "Created a full-stack commerce structure with product data, cart state, authentication and Razorpay-ready payment flow.",
      features: "Product catalogue, shopping cart, authentication and payment integration.",
      technology: "React, Node.js, MongoDB, Razorpay and Tailwind CSS.",
      architecture: "Frontend catalogue and cart connect to backend product, auth and order APIs with database-backed persistence.",
      challenges: "Designing the flow so users can browse and checkout without friction on mobile.",
      result: "A project outcome focused on commerce UX, data handling and payment integration readiness.",
    },
  },
  {
    title: "Image Encryption Application",
    image: encryptionProjectImage,
    label: "Security Utility",
    description: "A secure utility concept for encrypting images, handling uploads and storing protected files in cloud infrastructure.",
    tech: ["React", "Node.js", "AWS S3", "Encryption"],
    liveUrl: "",
    githubUrl: "",
    caseStudy: {
      problem: "Users needed a way to protect image files while keeping upload and storage workflows straightforward.",
      solution: "Designed an application flow for client interaction, backend encryption handling and AWS S3 file storage.",
      features: "Image upload, encryption workflow, cloud storage and retrieval planning.",
      technology: "React, Node.js, AWS S3 and encryption utilities.",
      architecture: "Frontend handles file selection, backend manages encryption and controlled cloud storage interaction.",
      challenges: "Keeping security-sensitive work out of the frontend and avoiding exposed credentials.",
      result: "A technical outcome demonstrating secure architecture thinking and cloud storage integration.",
    },
  },
];

export const techGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Redux Toolkit"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Socket.IO"] },
  { title: "Database", items: ["MongoDB", "PostgreSQL"] },
  { title: "Cloud / Deployment", items: ["AWS", "Vercel", "Netlify", "Render"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
];

export const processSteps = [
  { title: "Discover", description: "Understand the business, audience, goals and required functionality." },
  { title: "Plan", description: "Define structure, content priorities, user paths and technology choices." },
  { title: "Design", description: "Create the UI/UX direction with responsive layouts and visual hierarchy." },
  { title: "Develop", description: "Build the website or application with clean components and maintainable code." },
  { title: "Test", description: "Check mobile, desktop, browser behavior, forms, links and performance." },
  { title: "Deploy", description: "Configure hosting, domain, SSL, environment variables and production build." },
  { title: "Support", description: "Provide maintenance, improvements and future feature additions when needed." },
];

export const reasons = [
  { icon: "SearchCheck", title: "Business-focused", description: "I do not just build pages; I focus on what the website needs to achieve for your business." },
  { icon: "MonitorSmartphone", title: "Mobile-first", description: "The experience is planned for phones, tablets and desktops from the beginning." },
  { icon: "Code2", title: "Modern technology", description: "Built with current frontend and backend tools that are practical to maintain." },
  { icon: "CircleDollarSign", title: "Transparent pricing", description: "Development, infrastructure and optional maintenance costs are separated clearly." },
  { icon: "ShieldCheck", title: "Client-owned infrastructure", description: "Domain and hosting can remain under the client's ownership wherever possible." },
  { icon: "Layers3", title: "Long-term support", description: "Optional maintenance and improvements can keep the site useful after launch." },
];

export const testimonials = [
  { quote: "Sarfaraj was easy to work with and took the time to understand what we actually needed. He was patient with changes and made sure everything worked properly before finishing the project.", name: "Shivam Chaurashiya", role: "Project Collaborator" },
  { quote: "What I liked most was that Sarfaraj didn't just focus on making the interface look good. He also paid attention to the functionality and explained the technical side clearly whenever something needed to be changed.", name: "Shubhajit Hazra", role: "Project Teammate" },
  { quote: "The final website was clean, responsive and much easier to use than what we had before. Sarfaraj was responsive throughout the process and was open to feedback.", name: "Amit Kumar", role: "Business Owner" },
];

export const faqs = [
  { question: "How much does a website cost?", answer: "Pricing depends on pages, functionality, integrations and content requirements. I will clarify the scope first and then share a practical quote." },
  { question: "How long does a website take?", answer: "A simple business website often takes a few weeks, while applications or integration-heavy projects need a longer timeline." },
  { question: "Do I need to buy a domain?", answer: "A custom domain is recommended and is normally owned by the client so the business keeps control." },
  { question: "What about hosting?", answer: "Hosting depends on the website's requirements. Static sites, backend apps and database-backed products can need different setups." },
  { question: "Do I need a database?", answer: "Simple informational websites generally do not need one. Apps, admin panels, accounts and dynamic content usually do." },
  { question: "Can you maintain my website?", answer: "Yes. Maintenance can be discussed separately based on update frequency and technical needs." },
  { question: "Can you redesign my existing website?", answer: "Yes. I can improve UI, mobile behavior, performance and the overall user experience." },
  { question: "Can I update the website myself?", answer: "That depends on whether an admin panel or CMS is included in the project scope." },
];
