/**
 * Rafsan Labs — single editable content file.
 * Loaded with a normal <script> tag (no modules / no build).
 * Set placeholder: true (or leave image/url empty) to hide an item.
 */
window.SITE = {
  company: {
    name: "Rafsan Labs",
    legalName: "Rafsan Labs",
    url: "https://rafsanlabs.top",
    email: "rafsan.official@rafsanlabs.top",
    founder: "MD Sahad Hossain",
    founderShort: "Rafsan",
    tagline: "Applied AI, security, and motion — built to ship.",
    pitch:
      "Rafsan Labs is the studio of MD Sahad Hossain (Rafsan): AI/ML and LLM systems, cybersecurity, video editing, and 2D/3D animation under one roof. Software development supports those services.",
    story:
      "Rafsan Labs grew out of years of freelance delivery on Fiverr and Upwork — video, animation, software, and security work for clients worldwide. The studio exists so those capabilities sit together with a clear process: discover, plan, build, then deliver and support. We stay small on purpose. Credibility comes from finished work, not from inflated claims.",
    location: {
      // TODO: English shop name and street address for captions / JSON-LD
      label: "Physical shop",
      caption: "One of our physical shops.",
      embedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7034923875603!2d89.1652249!3d23.217474!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff19c990e184bd%3A0x70add8fde0ebf51!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmuOCnjeCmpOCnjeCmsCDgpqzgpr_gpqrgpqjgpr8!5e0!3m2!1sen!2sbd!4v1791813784594!5m2!1sen!2sbd"
    }
  },

  seo: {
    title: "Rafsan Labs — AI, Cybersecurity, Video & Animation",
    description:
      "Rafsan Labs is the studio of MD Sahad Hossain (Rafsan). We deliver AI/ML and LLM solutions, cybersecurity and penetration testing, video editing, and 2D/3D animation.",
    ogImage: "https://rafsanlabs.top/assets/img/profile.jpg"
  },

  /**
   * TODO: FORMSPREE_FORM_ID
   * Create a form at https://formspree.io and paste the ID only (e.g. "xyzabcd").
   * Leave empty until then — the submit button stays disabled.
   */
  formspreeId: "",

  links: {
    portfolio: "portfolio.html",
    fiverr: "https://www.fiverr.com/users/rafsansahad7",
    fiverrPortfolio: "https://www.fiverr.com/users/rafsansahad7/portfolio?roleIds=",
    upwork: "https://www.upwork.com/freelancers/~0189661ee7552e6db1",
    github: "https://github.com/RafsanSahad",
    linkedin: "https://www.linkedin.com/in/rafsan-sahad/",
    facebook: "https://www.facebook.com/itsRafsanSahad"
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    headline: "A focused studio for AI, security, and motion.",
    ctaPrimary: { label: "Work With Us", href: "#contact" },
    ctaSecondary: { label: "View Projects", href: "#work" }
  },

  services: [
    {
      id: "ai-ml",
      title: "AI/ML & LLM solutions",
      description:
        "Practical machine-learning and large-language-model work: assistants, automation, and evaluation — designed around a real workflow, not a demo.",
      capabilities: [
        "Custom LLM tooling, prompts, and retrieval pipelines",
        "Python automation that connects models to your process",
        "Evaluation, iteration, and handoff your team can run"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & penetration testing",
      description:
        "Ethical hacking and vulnerability assessment so you know what is exposed — and what to fix first.",
      capabilities: [
        "Scoped penetration testing and vulnerability review",
        "Clear findings with practical remediation notes",
        "Hardening advice across common stacks and networks"
      ]
    },
    {
      id: "video",
      title: "Video editing",
      description:
        "Editorial and finishing for commercials, YouTube, and social: pacing, color, and sound that hold attention.",
      capabilities: [
        "Narrative cuts, commercials, and long-form YouTube",
        "Color grading and sound design",
        "Delivery for web, ads, and social formats"
      ]
    },
    {
      id: "animation",
      title: "2D/3D animation & motion graphics",
      description:
        "Explainers, logo motion, character work, and 3D — built so the motion serves the message.",
      capabilities: [
        "2D/3D animation and explainer sequences",
        "Logo animation and brand motion systems",
        "Character design that carries into motion"
      ]
    }
  ],

  projectFilters: [
    { id: "all", label: "All" },
    { id: "ai-ml", label: "AI/ML" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "video", label: "Video" },
    { id: "animation", label: "Animation" }
  ],

  projects: [
    {
      id: "fiverr-portfolio",
      title: "Fiverr service portfolio",
      category: "video",
      thumbnail: "",
      description:
        "Live Fiverr profile covering video editing, animation, and related freelance delivery.",
      tools: ["Video Editing", "Animation", "Motion Graphics"],
      // TODO: specific role/outcome for a named engagement (do not invent client metrics)
      role: "Freelance editor, animator, and motion designer",
      outcome: "Ongoing client work listed on the public Fiverr portfolio.",
      links: [{ label: "View on Fiverr", url: "https://www.fiverr.com/users/rafsansahad7/portfolio?roleIds=" }],
      files: []
    },
    {
      id: "portfolio-animation",
      title: "Portfolio animation reel",
      category: "animation",
      thumbnail: "https://i.ytimg.com/vi/Jv_u1frLJTQ/hqdefault.jpg",
      description: "A reel of animation and motion-graphics work.",
      tools: ["After Effects", "Motion Graphics", "Animation"],
      role: "Animator and motion designer",
      outcome: "Published showreel on YouTube.",
      links: [{ label: "Watch on YouTube", url: "https://youtu.be/Jv_u1frLJTQ" }],
      files: [{ type: "video", label: "YouTube reel", url: "https://youtu.be/Jv_u1frLJTQ" }]
    },
    {
      id: "animation-gallery",
      title: "Animation projects",
      category: "animation",
      thumbnail: "",
      description: "A Flickr set of animation and motion-graphics pieces.",
      tools: ["After Effects", "Motion Graphics", "Animation"],
      role: "Animator",
      outcome: "Public gallery of completed motion work.",
      links: [{ label: "View animation gallery", url: "https://flic.kr/s/aHBqjzKSvi" }],
      files: []
    },
    {
      id: "character-design",
      title: "Character design",
      category: "animation",
      thumbnail: "",
      description: "Character designs and illustrations collected in a Flickr gallery.",
      tools: ["Illustrator", "Character Design", "2D Art"],
      role: "Character designer",
      outcome: "Public gallery of character sheets and illustrations.",
      links: [{ label: "View character designs", url: "https://flic.kr/s/aHBqjzEsxq" }],
      files: []
    },
    {
      id: "github-projects",
      title: "GitHub projects",
      category: "ai-ml",
      thumbnail: "",
      description:
        "Public code and experiments. Software here supports AI/ML, automation, and studio tooling — not a separate product line.",
      tools: ["Python", "C++", "Web Development"],
      role: "Developer",
      outcome: "Source and notes on GitHub.",
      links: [{ label: "View GitHub", url: "https://github.com/RafsanSahad" }],
      files: []
    }
    // TODO: add AI/ML and cybersecurity case studies with real scope (no invented clients).
    // Optional files example:
    // files: [
    //   { type: "pdf", label: "Project brief", url: "assets/docs/example.pdf" },
    //   { type: "pptx", label: "Deck", url: "assets/decks/example.pptx" },
    //   { type: "link", label: "Live site", url: "https://example.com" },
    //   { type: "video", label: "Walkthrough", url: "https://youtu.be/VIDEO_ID" }
    // ]
  ],

  testimonials: [
    // TODO: add a real client quote (name, optional role, quote). Do not invent names.
    {
      placeholder: true,
      name: "",
      role: "",
      quote: "",
      rating: 5
    }
  ],

  certificates: [
    {
      title: "Fundamentals of Digital Marketing",
      issuer: "Google",
      year: "2024",
      image: "",
      url: "",
      placeholder: true // TODO: add certificate image or verification URL
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Hack The Box",
      year: "2024",
      image: "",
      url: "",
      placeholder: true // TODO: add certificate image or verification URL
    },
    {
      title: "Python Programming",
      issuer: "EDGE",
      year: "2025",
      image: "",
      url: "",
      placeholder: true // TODO: add certificate image or verification URL
    },
    {
      title: "Graphic Design",
      issuer: "Fiverr",
      year: "2020",
      image: "",
      url: "",
      placeholder: true // TODO: add certificate image or verification URL
    },
    {
      title: "Conversation English",
      issuer: "Fiverr",
      year: "2024",
      image: "",
      url: "",
      placeholder: true // TODO: add certificate image or verification URL
    },
    {
      title: "Adobe",
      issuer: "Fiverr",
      year: "2021",
      image: "",
      url: "",
      placeholder: true // TODO: add certificate image or verification URL
    }
  ],

  process: [
    {
      title: "Discover",
      body: "We clarify the problem, constraints, assets, and what success looks like — before tools enter the conversation."
    },
    {
      title: "Plan",
      body: "Scope, timeline, and a written approach. You know what we will build, what we will not, and how reviews work."
    },
    {
      title: "Build",
      body: "Production in the agreed stack: models and code, security testing, edit, or motion — with checkpoints, not surprises."
    },
    {
      title: "Deliver and support",
      body: "Handoff with files, notes, and a short window of support so the work stays usable after we leave."
    }
  ],

  about: {
    photo: "assets/img/profile.jpg",
    photoAlt: "Portrait of MD Sahad Hossain (Rafsan), founder of Rafsan Labs",
    skills: [
      "C",
      "C++",
      "Python",
      "HTML",
      "SQL",
      "Python Automation",
      "VFX",
      "Blender",
      "3D",
      "Unreal Engine",
      "Motion Graphics",
      "Graphic Design",
      "Character Design",
      "App Development",
      "Game Development",
      "Adobe After Effects",
      "Adobe Premiere Pro",
      "Adobe Animate",
      "Adobe Character Animator",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "AI Prompting",
      "Cybersecurity",
      "Penetration testing",
      "Networking"
    ],
    tools: [
      "Adobe Creative Suite",
      "Unreal Engine",
      "Blender",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Premiere Pro",
      "C / C++ / Python",
      "HTML",
      "SQL",
      "Google Ads",
      "Google Analytics",
      "Google Search Console",
      "Windows / Linux / macOS",
      "Parrot OS",
      "Kali Linux",
      "Git",
      "Raspberry Pi"
    ],
    experience: [
      {
        org: "Fiverr",
        period: "2020 – Present",
        role: "Video editor, coder, animator, motion graphics"
      },
      {
        org: "Upwork",
        period: "2020 – Present",
        role: "Video editor, coder, animator, motion graphics"
      },
      {
        org: "Hack The Box",
        period: "2023 – Present",
        role: "Penetration tester and ethical hacker"
      },
      {
        org: "Cod3rio",
        period: "2022 – 2024",
        role: "Animator and cybersecurity specialist"
      },
      {
        org: "Independent",
        period: "",
        role: "Freelance editor and bug bounty hunter"
      }
    ],
    languages: [
      "Bangla (Native)",
      "English (Professional)",
      "Hindi (Conversational)",
      "Urdu (Conversational)",
      "Nepali (Conversational)",
      "Japanese (Basic)"
    ]
  }
};
