export type StoreLink = {
  label: string;
  href: string;
};

export type AppFeature = {
  icon:
    | "ScanLine"
    | "ShieldCheck"
    | "History"
    | "Gamepad2"
    | "Zap"
    | "Gauge"
    | "Heart"
    | "PenLine"
    | "Sparkles"
    | "Droplets"
    | "Bell"
    | "BarChart3"
    | "Orbit"
    | "Trophy"
    | "Stars";
  title: string;
  description: string;
};

export type AppInfo = {
  slug: string;
  name: string;
  category: "Utility" | "Game" | "Lifestyle";
  tagline: string;
  shortDescription: string;
  description: string[];
  icon: string;
  featureGraphic?: string;
  screenshots: string[];
  accent: string;
  features: AppFeature[];
  appStore: StoreLink;
  googlePlay: StoreLink;
};

const placeholder = (size: string, background: string, text: string) =>
  `https://placehold.co/${size}/${background}/f8fafc/png?text=${encodeURIComponent(text)}`;

export const apps: AppInfo[] = [
  {
    slug: "secure-qr-scanner",
    name: "Secure QR Scanner",
    category: "Utility",
    tagline: "Fast QR scans with a privacy-first mindset.",
    shortDescription:
      "Scan QR codes quickly, preview destinations, and keep your everyday links tidy.",
    description: [
      "Secure QR Scanner is built for quick checks without turning a simple scan into a noisy experience. Open the app, scan a code, and review the result before you jump anywhere.",
      "The app keeps the interface focused on the task: clear scan results, practical history, and helpful warnings for links that deserve a second look.",
      "It is a utility for people who scan codes often and want the moment to feel calm, fast, and under control."
    ],
    icon: placeholder("512x512", "0f766e", "QR"),
    screenshots: [
      placeholder("450x800", "0f766e", "Scan"),
      placeholder("450x800", "134e4a", "Preview"),
      placeholder("450x800", "155e75", "History"),
      placeholder("450x800", "164e63", "Safety")
    ],
    accent: "from-teal-400 via-cyan-300 to-emerald-400",
    features: [
      {
        icon: "ScanLine",
        title: "Quick scanning",
        description: "Open straight to the camera and read everyday QR codes in seconds."
      },
      {
        icon: "ShieldCheck",
        title: "Link preview",
        description: "Review URLs and copied text before taking the next step."
      },
      {
        icon: "History",
        title: "Clean history",
        description: "Keep recent scans organized so important codes are easy to find."
      }
    ],
    appStore: { label: "App Store", href: "#" },
    googlePlay: { label: "Google Play", href: "#" }
  },
  {
    slug: "driftombie",
    name: "Driftombie",
    category: "Game",
    tagline: "Drift, survive, and outdrive the undead.",
    shortDescription:
      "A punchy mobile survival driving game about clean drifts and close escapes.",
    description: [
      "Driftombie turns survival into a tight driving loop: read the road, angle the car, and chain drifts while danger closes in from every side.",
      "Each run is designed to be quick to start and hard to put down, with arcade energy, upgrade hooks, and satisfying moments when a risky turn pays off.",
      "It is built for players who like fast retries, simple controls, and a little chaos in their pockets."
    ],
    icon: placeholder("512x512", "991b1b", "DZ"),
    screenshots: [
      placeholder("450x800", "991b1b", "Drift"),
      placeholder("450x800", "7f1d1d", "Survive"),
      placeholder("450x800", "365314", "Upgrade"),
      placeholder("450x800", "111827", "Run")
    ],
    accent: "from-red-400 via-lime-300 to-zinc-200",
    features: [
      {
        icon: "Gamepad2",
        title: "Arcade control",
        description: "Simple steering tuned for quick sessions and dramatic saves."
      },
      {
        icon: "Zap",
        title: "High-pressure runs",
        description: "Survive longer, score higher, and chase that one better attempt."
      },
      {
        icon: "Gauge",
        title: "Upgrade rhythm",
        description: "Build momentum through rewards, unlocks, and run-to-run goals."
      }
    ],
    appStore: { label: "App Store", href: "#" },
    googlePlay: { label: "Google Play", href: "#" }
  },
  {
    slug: "love-cards",
    name: "Love Cards: Couple Questions",
    category: "Lifestyle",
    tagline: "Ask. Answer. Connect.",
    shortDescription:
      "Romantic questions, conversation cards, and a private room for couples.",
    description: [
      "Love Cards is a conversation card app for couples who want deeper, warmer, and more playful moments together. One good question can change the mood of the whole evening, whether you are at home, on a date night, or spending time together from a distance.",
      "Explore romantic, fun, emotional, and thoughtful question cards designed to help you get to know each other better. Save favorites, create and share beautiful cards, complete daily tasks, and use credits to discover more prompts.",
      "Couple Room lets partners create a private room, draw cards, write answers, and rate each other. Love Cards is not therapy or relationship counseling; it is a card-based way to turn conversation into an easy, intimate, and enjoyable ritual."
    ],
    icon: "/assets/apps/love-cards/logo.png",
    featureGraphic: "/assets/apps/love-cards/feature-graphic.png",
    screenshots: [
      "/assets/apps/love-cards/screen-1.jpg",
      "/assets/apps/love-cards/screen-2.jpg",
      "/assets/apps/love-cards/screen-3.jpg",
      "/assets/apps/love-cards/screen-4.jpg"
    ],
    accent: "from-pink-500 via-rose-400 to-orange-300",
    features: [
      {
        icon: "Heart",
        title: "Couple questions",
        description: "Explore romantic, fun, emotional, and thoughtful prompts for better conversations."
      },
      {
        icon: "Sparkles",
        title: "Beautiful cards",
        description: "Create and share polished question cards that feel warm and intentional."
      },
      {
        icon: "PenLine",
        title: "Favorites",
        description: "Save the questions that matter so you can return to them later."
      },
      {
        icon: "ShieldCheck",
        title: "Couple Room",
        description: "Create a private room, draw cards, write answers, and rate each other."
      },
      {
        icon: "Trophy",
        title: "Daily tasks",
        description: "Complete small daily activities and use credits to discover more cards."
      },
      {
        icon: "Zap",
        title: "Premium upgrade",
        description: "Unlock unlimited questions and enjoy an ad-free experience."
      }
    ],
    appStore: { label: "App Store", href: "#" },
    googlePlay: { label: "Google Play", href: "#" }
  },
  {
    slug: "drinkly",
    name: "Drinkly",
    category: "Lifestyle",
    tagline: "A lighter way to remember water.",
    shortDescription:
      "Track hydration with friendly reminders, simple goals, and a calm daily view.",
    description: [
      "Drinkly keeps hydration tracking practical. Set a daily target, log drinks quickly, and see your progress without digging through complicated charts.",
      "It is designed around gentle nudges instead of pressure, making it easier to build a small habit that fits real life.",
      "The app works best as a quiet companion for people who want a simple daily rhythm."
    ],
    icon: placeholder("512x512", "2563eb", "DR"),
    screenshots: [
      placeholder("450x800", "2563eb", "Today"),
      placeholder("450x800", "1d4ed8", "Log"),
      placeholder("450x800", "0f766e", "Goals"),
      placeholder("450x800", "334155", "Stats")
    ],
    accent: "from-blue-400 via-teal-300 to-slate-200",
    features: [
      {
        icon: "Droplets",
        title: "Fast logging",
        description: "Add common drink amounts with a tap and keep moving."
      },
      {
        icon: "Bell",
        title: "Gentle reminders",
        description: "Use light prompts that help without feeling demanding."
      },
      {
        icon: "BarChart3",
        title: "Daily progress",
        description: "See where you stand today and build a steady habit over time."
      }
    ],
    appStore: { label: "App Store", href: "#" },
    googlePlay: { label: "Google Play", href: "#" }
  },
  {
    slug: "cosmic-energy",
    name: "Cosmic Energy",
    category: "Game",
    tagline: "Tap into a neon space challenge.",
    shortDescription:
      "A compact mobile game built around cosmic reactions, timing, and score chasing.",
    description: [
      "Cosmic Energy is a bright arcade experience about timing, reactions, and chasing a cleaner run through space-inspired challenges.",
      "The game keeps the rules readable and the pace lively, so every attempt feels like a fresh shot at better flow.",
      "It is made for short sessions, glowing visuals, and that satisfying feeling when your timing finally clicks."
    ],
    icon: placeholder("512x512", "6d28d9", "CE"),
    screenshots: [
      placeholder("450x800", "6d28d9", "Energy"),
      placeholder("450x800", "4338ca", "Combo"),
      placeholder("450x800", "0891b2", "Focus"),
      placeholder("450x800", "111827", "Score")
    ],
    accent: "from-violet-400 via-sky-300 to-fuchsia-300",
    features: [
      {
        icon: "Orbit",
        title: "Cosmic flow",
        description: "React to shifting patterns and stay locked into the rhythm."
      },
      {
        icon: "Trophy",
        title: "Score chasing",
        description: "Improve your best run with quick retries and readable goals."
      },
      {
        icon: "Stars",
        title: "Neon feel",
        description: "A compact visual style with space energy and arcade clarity."
      }
    ],
    appStore: { label: "App Store", href: "#" },
    googlePlay: { label: "Google Play", href: "#" }
  }
];

export const getAppBySlug = (slug: string) =>
  apps.find((app) => app.slug === slug);
