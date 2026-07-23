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
      name: "Photo Tagger",
      summary:
        "Tool that feeds images from Flickr into a model that detects specified logos and tags them accordingly. The job can be run on a scheduled basis or on-demand. ",
      href: "https://github.com/CDplayerxOne/Photo-Tagger",
    },
    {
      name: "Stack Overflow",
      summary:
        "No, it's not actually a Stack Overflow. It's actually a custom pentamino game with extra power ups.",
      href: "https://github.com/CDplayerxOne/Stack-Overflow",
    },
    {
      name: "LePong James",
      summary: "Pong but Lebron James style",
      href: "https://github.com/CDplayerxOne/LePong-James",
    },
  ],
  experience: [
    {
      company: "FIRST Robotics Canada",
      role: "Administrative Coordinator Intern",
      period: "July 2025 - August 2025",
      summary:
        "Designed social media posts for the upcoming FIRST Robotics season and ran camps to provide students with hands-on experience in STEM and robotics. ",
    },
    {
      company: "FRC Team 8574 Audeamus",
      role: "Electrical and Software Lead",
      period: "September 2021 - June 2025",
      summary:
        "Led the electrical and software team to design and implement the electrical system and software for an FRC robot. The Team won the District Rookie All-Star award in 2022 and attended the FIRST Championship. ",
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
