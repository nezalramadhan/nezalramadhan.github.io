export const technologies = {
  frontend: ["HTML", "CSS", "JavaScript", "Vue.js", "React", "Tailwind CSS", "Bootstrap"],
  backend: ["PHP", "Laravel", "Node.js", "Express.js", "CodeIgniter"],
  database: ["MySQL", "MongoDB", "SQLite"],
  tools: ["Git", "GitHub", "Docker", "XAMPP", "cPanel", "VPS"],
} as const;

export type TechnologyGroup = keyof typeof technologies;
