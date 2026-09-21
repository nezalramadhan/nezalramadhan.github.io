export type Project = {
  slug: string;
  index: string;
  title: string;
  /** Short one-line teaser shown on the homepage index row */
  summary: string;
  status: "thesis" | "personal" | "placeholder";
  statusLabel: string;
  /** Category used by the /projects filter; keep it one of the values present
   * in the data so the filter tabs stay honest (R-38). Empty string = uncategorized. */
  category: string;
  year: string;
  /** Emoji-free icon name; used to render a relevant lucide glyph on the row */
  tech: string[];
  /** Long description for the detail page */
  overview: string;
  problem?: string;
  solution?: string;
  features: string[];
  image?: {
    src: string;
    alt: string;
  };
  /**
   * External links for the detail page. Optional on purpose: buttons render
   * only when a URL exists, so there is never a dead link (R-26) or a
   * fabricated URL (R-38). Fill these in when the live site / repository
   * exists; leave them empty until then.
   */
  links?: {
    live?: string;
    source?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "sistem-digitalisasi-surat",
    index: "01",
    title: "Sistem Digitalisasi Surat",
    summary:
      "A web-based digitalization system for managing school correspondence: letter creation, automatic numbering, document management, and digital archiving.",
    status: "thesis",
    statusLabel: "Thesis project",
    category: "Web App",
    year: "2025",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    overview:
      "Pesan Barkal (short for Persuratan Barokallah) is a web-based system that digitalizes the correspondence workflow of a school. It replaces manual letter filing and physical archives with a structured digital process: drafting a letter, assigning an automatic number based on a running set of rules, storing the document, and retrieving it later from a searchable archive.",
    problem:
      "The school managed its letters on paper and in scattered office files. Creating a letter meant manually tracking the next available number, documents piled up in cabinets, and finding an older letter could take a long time.",
    solution:
      "I built a single Laravel application that standardizes the whole flow. The system owns the numbering rules, so every letter gets a correct, sequential number without manual bookkeeping. Documents are stored digitally with metadata, which makes them searchable and much easier to retrieve.",
    features: [
      "Letter creation with a structured form and per-type templates",
      "Automatic sequential numbering following the school's running-number rules",
      "Digital document upload and storage with typed metadata",
      "Searchable archive that keeps letters during their retention period",
      "Role-based access for the staff who create, approve, and manage letters",
    ],
  },
  {
    slug: "psb-barokah",
    index: "02",
    title: "PSB Barokah",
    summary:
      "A web-based new student registration system that manages registration, document submission, verification, testing, payment, and applicant information.",
    status: "personal",
    statusLabel: "Personal project",
    category: "Web App",
    year: "2024",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    overview:
      "PSB Barokah handles the new student admission flow for a school: prospective students register, submit documents, sit a test, and track their status, while the school verifies each applicant and manages the results. It moves the whole admission process out of spreadsheets and into a single system.",
    problem:
      "Admissions previously ran through paper forms and repeated manual steps. Tracking where each applicant was in the process, and which documents they had submitted, was difficult for the admission team.",
    solution:
      "I designed a status-driven flow in Laravel. Each applicant moves through clear stages (registered, documents submitted, verified, tested, paid, accepted), and both the applicant and the school see the same current state. The payment step records the payment so the status stays consistent.",
    features: [
      "Applicant registration with a multi-field form",
      "Document submission per applicant",
      "Verification workflow for the admission team",
      "Test stage with recorded results",
      "Payment tracking that updates the applicant's status",
      "An applicant dashboard showing current progress",
    ],
  },
  {
    slug: "your-next-project",
    index: "03",
    title: "Your next project",
    summary:
      "A spot reserved for the next thing. Swap the data in src/data/projects.ts when you are ready to feature a new project here.",
    status: "placeholder",
    statusLabel: "Coming soon",
    category: "",
    year: "",
    tech: [],
    overview:
      "This slot is intentionally left open. When you build your next project, edit the third entry in src/data/projects.ts to give it a title, a real description, and the technologies you used.",
    // TODO: Replace this placeholder with a real project before publishing.
    // Add a screenshot to /public/projects/<slug>.jpg and point image.src at it.
    features: [],
  },
];