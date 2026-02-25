export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    icon: "code",
    title: "Frontend",
    items: [
      "React.js", "Next.js", "TypeScript", "JavaScript",
      "Vue.js", "Tailwind CSS", "shadcn/ui", "Framer Motion",
      "Redux Toolkit", "React Query", "SASS", "Bootstrap",
    ],
  },
  {
    icon: "server",
    title: "Backend",
    items: [
      "Node.js", "Express.js", "PHP", "Laravel",
      "PostgreSQL", "MySQL", "MongoDB", "Firebase",
      "REST APIs", "GraphQL", "Redis", "Prisma",
    ],
  },
  {
    icon: "smartphone",
    title: "Mobile",
    items: [
      "React Native", "TypeScript", "Expo",
      "React Navigation", "AsyncStorage", "Push Notifications",
    ],
  },
  {
    icon: "cloud",
    title: "DevOps & Tools",
    items: [
      "Git & GitHub", "Docker", "AWS", "Vite",
      "Vercel", "CI/CD", "Nginx", "Figma",
      "Radix UI", "Formik / Yup", "Recharts", "Webpack",
    ],
  },
  {
    icon: "layout",
    title: "CMS & E-Commerce",
    items: [
      "WordPress", "WooCommerce", "Elementor",
      "Paystack API", "Stripe", "Headless CMS",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Rate'O – Workplace Feedback Platform",
    subtitle: "Full Stack • Next.js 15",
    category: "Full Stack",
    tag: "Next.js",
    image: "/assets/images/Rateo-Empowering-better-work-experiences-for-everyone--09-15-2025_10_01_AM.png",
    fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
    description:
      "Anonymous workplace feedback platform that fosters transparency and improves employee experiences. Built with Next.js 15 App Router, Tailwind CSS, shadcn/ui component library, TanStack React Query, Framer Motion animations, and a Node.js/MySQL backend. Features internationalisation, role-based auth, and a live analytics dashboard using Recharts.",
    tech: ["Next.js 15", "TypeScript", "React 19", "TanStack Query", "shadcn/ui", "Tailwind CSS", "Node.js", "MySQL", "Framer Motion"],
    liveLink: "https://rateo.ng/",
    githubLink: "https://github.com/Gabrielanie/web-admin-rateo-develop.git",
    featured: true,
  },
  {
    id: 2,
    title: "Gisela Vogue – E-Commerce Store",
    subtitle: "Full Stack • WordPress",
    category: "Full Stack",
    tag: "WordPress",
    image: "/assets/images/Home-Giselavogue-09-08-2025_04_10_PM.png",
    fallbackImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1170&q=80",
    description:
      "Full-featured fashion e-commerce store with real-time inventory, secure Paystack payment gateway, product filtering, and a responsive design. Handles 500+ daily visitors. Built on WordPress/WooCommerce with custom Elementor templates and performance-optimised queries.",
    tech: ["WordPress", "WooCommerce", "Elementor", "Paystack API", "PHP", "MySQL", "JavaScript", "CSS3"],
    liveLink: "https://www.giselavogue.com",
    githubLink: "",
    featured: true,
  },
  {
    id: 3,
    title: "OnTheGo – Mobile App",
    subtitle: "Full Stack • React Native",
    category: "Mobile",
    tag: "React Native",
    image: "/assets/images/On-The-Go-09-08-2025_04_05_PM.png",
    fallbackImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1170&q=80",
    description:
      "Cross-platform mobile application that helps users discover free Wi-Fi hotspots and restaurants near major landmarks across Africa. Built with React Native & TypeScript, with a Node.js REST API backend. Features real-time location services, push notifications, and offline caching.",
    tech: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
    liveLink: "https://www.otgafrica.com/",
    githubLink: "https://github.com/AVstudio1999/onthego.git",
    featured: true,
  },
  {
    id: 4,
    title: "Greensage – HR Management System",
    subtitle: "Full Stack • Laravel + React",
    category: "Full Stack",
    tag: "Laravel",
    image: "/assets/images/Greensage-Business-Consult-360-degrees-HR-services-09-15-2025_10_15_AM.png",
    fallbackImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80",
    description:
      "Comprehensive Human Resource Management System for organisational performance tracking, payroll, and training solutions. Laravel PHP backend with React.js frontend, featuring role-based access control, staff onboarding flows, and exportable reports.",
    tech: ["Laravel", "PHP", "React.js", "MySQL", "Bootstrap", "REST API"],
    liveLink: "https://greensagebconsult.com/",
    githubLink: "",
    featured: true,
  },
  {
    id: 5,
    title: "LGC Admin – Church Management Dashboard",
    subtitle: "Frontend • React + Vite",
    category: "Frontend",
    tag: "React",
    image: "",
    fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1170&q=80",
    description:
      "Admin dashboard for church management including member records, attendance tracking, financial reports, and event scheduling. Built with React, Vite, TypeScript, Radix UI, Redux Toolkit, Framer Motion, and Recharts for data visualisation.",
    tech: ["React", "Vite", "TypeScript", "Redux Toolkit", "Radix UI", "Recharts", "Framer Motion", "Tailwind CSS"],
    liveLink: "",
    githubLink: "",
    featured: false,
  },
  {
    id: 6,
    title: "Gabriel Anie Digital Solutions",
    subtitle: "Frontend • Vite + React + shadcn",
    category: "Frontend",
    tag: "React",
    image: "",
    fallbackImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1170&q=80",
    description:
      "Digital agency landing page and client portal built with Vite, React, TypeScript, shadcn/ui, and Tailwind CSS. Includes service showcase, pricing tiers, client contact forms, and Netlify deployment pipeline.",
    tech: ["React", "Vite", "TypeScript", "shadcn/ui", "Tailwind CSS", "Netlify"],
    liveLink: "",
    githubLink: "",
    featured: false,
  },
  {
    id: 7,
    title: "Analytics Dashboard",
    subtitle: "Frontend • Vue.js",
    category: "Frontend",
    tag: "Vue.js",
    image: "",
    fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
    description:
      "Real-time data visualisation platform with interactive charts, live WebSocket feeds, and custom report generation. Built with Vue 3, D3.js, and Chart.js.",
    tech: ["Vue.js 3", "D3.js", "WebSockets", "Chart.js", "Vite", "Laravel"],
    liveLink: "",
    githubLink: "https://github.com/Gabrielanie/dashboard-a1.git",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    period: "2024 – Present",
    role: "Senior Full Stack Developer",
    company: "A Venture Studio",
    location: "Remote (London)",
    points: [
      "Led development of OnTheGo, a cross-platform React Native mobile app serving users across Africa.",
      "Architected Node.js/Express REST APIs with MongoDB for real-time location-based services.",
      "Led a distributed team of 4 developers, conducting code reviews and sprint planning.",
      "Built the Rate'O feedback platform using Next.js 15, TypeScript, and TanStack Query.",
    ],
  },
  {
    period: "2023 – 2024",
    role: "Frontend Developer & Coding Instructor",
    company: "Melodia Coding Academy",
    location: "On-site",
    points: [
      "Developed and maintained responsive web applications using React, Vue.js, and modern CSS.",
      "Designed and delivered curriculum covering HTML/CSS, JavaScript, React, and Git workflows.",
      "Mentored 30+ students through hands-on projects and code reviews.",
    ],
  },
  {
    period: "2020 – 2022",
    role: "Web Developer Intern",
    company: "Firstlincoln Technology",
    location: "On-site",
    points: [
      "Assisted senior developers in building and maintaining websites and web applications.",
      "Implemented responsive designs using HTML5, CSS3, JavaScript, and Bootstrap.",
      "Optimised page-load performance, reducing average load time by 35%.",
    ],
  },
  {
    period: "2018 – Present",
    role: "Freelance Web Developer & Digital Strategist",
    company: "Self-Employed",
    location: "Remote",
    points: [
      "Built 20+ production websites and e-commerce stores for SMEs across Nigeria and the UK.",
      "Integrated payment gateways (Paystack, Stripe) and third-party APIs.",
      "Provided digital strategy, SEO, and brand development alongside technical delivery.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Gabriel delivered an exceptional e-commerce platform for our fashion brand. His attention to detail and technical expertise resulted in a 40% increase in our online sales within the first month of launch.",
    name: "Sarah Johnson",
    role: "CEO, Gisela Vogue",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "Working with Gabriel on our HR software was a game-changer. He transformed complex requirements into an intuitive platform that our team loves using daily.",
    name: "Michael Thompson",
    role: "Director, Greensage Consult",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Gabriel's expertise in React and Node.js helped us build a scalable platform. His clean code and documentation made future enhancements effortless.",
    name: "Jennifer Lee",
    role: "Product Manager, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];
