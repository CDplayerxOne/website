export const siteContent = {
  about: {
    name: "Corey Dai",
    summary:
      "I build clean, content-first websites that make a strong first impression without getting in the way of the work itself.",
    facts: [
      "Based in Your City and open to remote work.",
      "Focuses on thoughtful web experiences and simple interfaces.",
      "Likes typography, clarity, and leaving out what is not needed.",
    ],
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Experience", href: "/experience" },
    ],
  },
  projects: [
    {
      name: "Studio portfolio refresh",
      type: "Case study",
      summary:
        "Reworked a cluttered agency homepage into a crisp single-page narrative with clearer hierarchy, stronger calls to action, and faster load times.",
      href: "#contact",
    },
    {
      name: "Personal brand site",
      type: "Website",
      summary:
        "Built a minimal profile site that highlights the person first and the technology second, with a content model that is easy to update.",
      href: "#contact",
    },
    {
      name: "Launch landing page",
      type: "Product",
      summary:
        "Created a focused landing page with a simple message structure, sharp typography, and sections tuned for quick scanning on mobile.",
      href: "#contact",
    },
  ],
  experience: [
    {
      company: "Independent Builder",
      role: "Design and development partner",
      period: "2024 - Present",
      summary:
        "Work with individuals and small teams to turn ideas into production-ready websites, from content structure through implementation and launch.",
    },
    {
      company: "Creative Studio",
      role: "Frontend developer",
      period: "2022 - 2024",
      summary:
        "Implemented responsive marketing pages and internal tools with an emphasis on reusable components, accessibility, and maintainable code.",
    },
  ],
  skills: [
    "Next.js",
    "TypeScript",
    "Responsive UI",
    "Design systems",
    "Accessibility",
    "Content strategy",
    "Tailwind CSS",
  ],
  contact: {
    heading: "Let us make the next version of your website feel sharper.",
    summary:
      "If you want a polished personal site, a portfolio refresh, or help turning a rough concept into a clean web presence, I would love to hear from you.",
    email: "hello@yourname.dev",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
    ],
  },
  footer: {
    note: "Built with Next.js and designed to be easy to customize.",
    credit: "Replace the placeholder content with your real details.",
  },
} as const;
