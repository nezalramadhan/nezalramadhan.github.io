/**
 * Central profile data.
 *
 * Contact details are placeholders. Replace them with real values before
 * publishing. Nothing here is fabricated.
 */

export const profile = {
  name: "Nezal Khekam Ramadhan",
  firstName: "Nezal",
  role: ["INFORMATICS GRADUATE", "WEB DEVELOPER"],
  tagline:
    "I build web applications that are functional, simple, and meaningful.",
  about: [
    "I'm an Informatics graduate with an interest in web development and software engineering. I enjoy turning ideas and problems into functional digital products.",
    "Most of my experience comes from academic and personal projects, where I've built web applications end to end: from planning the data model, to writing the backend and API, to designing and building the interface. Each project has taught me something about how software is actually put together, and how to make it usable for the people who use it.",
    "I'm currently focusing on deepening my skills in modern frontend development and full-stack engineering, and I'm open to roles where I can keep learning and take on real responsibility.",
  ],
  education: {
    institution: "Universitas Nahdlatul Ulama Yogyakarta",
    degree: "S1 Informatika",
    period: "2022 – 2026",
  },
  location: "Yogyakarta, Indonesia",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skill", href: "/#tech" },
  { label: "Project", href: "/#work" },
  { label: "Contact", href: "/#contact" },
] as const;

export const contact = {
  email: "nezalramadhan@gmail.com",
  github: "https://github.com/nezalramadhan",
  linkedin: "https://www.linkedin.com/in/nezal-khekam/",
  whatsapp: "https://wa.me/62895611942247",
} as const;
