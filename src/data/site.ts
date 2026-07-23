export const siteContent = {
  about: {
    name: "Corey Dai",
    summary:
      "I hope to one day build intelligent systems that are safe, robust and can make a positive impact on people's lives.",
    facts: [
      "Data Science + CS @ U of T",
      "I play hockey 🏒 and enjoy watching basketball 🏀 and football 🏈",
      "Interested in AI, ML, Robotics and Autonomous Vehicles",
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
    email: "corey.dai@mail.utoronto.ca",
    links: [
      { label: "GitHub", href: "https://github.com/CDplayerxOne" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/corey-dai-253734337/",
      },
    ],
  },
  footer: {
    note: "Built with Next.js",
  },
} as const;
