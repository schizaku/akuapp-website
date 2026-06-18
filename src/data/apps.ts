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
    tagline: "Scan QR codes safely.",
    shortDescription:
      "Scan QR codes safely, verify links, and save favorites - all in one app.",
    description: [
      "Secure QR Scanner is a fast, secure, and user-friendly QR code scanner that helps protect you from malicious links, suspicious destinations, and phishing attempts.",
      "The app combines an optimized camera interface with real-time URL analysis. It can warn about unencrypted connections, invalid domains, IP-based links, shortened URLs, tracking parameters, and common phishing keywords before you open a result.",
      "Secure QR Scanner is built for everyday QR use: restaurant menus, event pages, WiFi connections, contact sharing, and quick link checks. It keeps history short and practical, lets you save favorites, supports 10 languages, and keeps core scanning private on your device."
    ],
    icon: "/assets/apps/secure-qr-scanner/logo.png",
    featureGraphic: "/assets/apps/secure-qr-scanner/feature-graphic.png",
    screenshots: [
      "/assets/apps/secure-qr-scanner/screen-1.png",
      "/assets/apps/secure-qr-scanner/screen-2.png",
      "/assets/apps/secure-qr-scanner/screen-3.png",
      "/assets/apps/secure-qr-scanner/screen-4.png"
    ],
    accent: "from-sky-400 via-cyan-300 to-emerald-300",
    features: [
      {
        icon: "ScanLine",
        title: "Lightning-fast scanning",
        description: "Use an optimized camera interface to read QR codes instantly."
      },
      {
        icon: "ShieldCheck",
        title: "Phishing protection",
        description: "Analyze URLs for suspicious domains, keywords, and risky patterns."
      },
      {
        icon: "History",
        title: "Smart history",
        description: "Store up to 10 recent QR codes for 7 days without clutter."
      },
      {
        icon: "Sparkles",
        title: "Favorites",
        description: "Save important QR codes indefinitely for quick access later."
      },
      {
        icon: "Zap",
        title: "Offline ready",
        description: "Scan and review common QR results even without an internet connection."
      },
      {
        icon: "Bell",
        title: "10 languages",
        description: "Use the app in English, Turkish, Spanish, French, German, and more."
      }
    ],
    appStore: { label: "App Store", href: "#" },
    googlePlay: { label: "Google Play", href: "#" }
  },
  {
    slug: "driftombie",
    name: "Driftombie - Drift or Die",
    category: "Game",
    tagline: "Drift. Slay. Survive.",
    shortDescription:
      "Zombie-infested streets. One weapon: your steering wheel.",
    description: [
      "Welcome to an arcade zombie survival drifting game where the city is overrun and the streets are filled with the walking dead. Your only real weapon is a heavily armored car, quick reflexes, and the ability to hold a perfect drift under pressure.",
      "Hit the gas, burn rubber, slide through hordes, and crush zombies to build score combos. Different terrain changes the feel of every run, from icy long slides to heavy desert sand and grippy city asphalt.",
      "Driftombie adds global maps, zombie variety, leaderboards, unlockable cars, custom skins, and dynamic pickups into one fast survival loop. Master the drift, avoid civilians, collect resources, and keep moving - staying still for too long means game over."
    ],
    icon: "/assets/apps/driftombie/logo.png",
    featureGraphic: "/assets/apps/driftombie/feature-graphic.png",
    screenshots: [
      "/assets/apps/driftombie/screen-1.jpeg",
      "/assets/apps/driftombie/screen-2.jpeg",
      "/assets/apps/driftombie/screen-3.jpeg",
      "/assets/apps/driftombie/screen-4.jpeg"
    ],
    accent: "from-purple-500 via-lime-300 to-zinc-100",
    features: [
      {
        icon: "Gamepad2",
        title: "Drift physics",
        description: "Steer, accelerate, brake, and control your angle across asphalt, sand, ice, and snow."
      },
      {
        icon: "Zap",
        title: "Zombie action",
        description: "Smash normal zombies, react to faster punk zombies, and avoid innocent civilians."
      },
      {
        icon: "Gauge",
        title: "World maps",
        description: "Drift through Istanbul streets, London boulevards, and Paris avenues."
      },
      {
        icon: "Trophy",
        title: "Global leaderboards",
        description: "Compete in weekly, monthly, and all-time rankings against players worldwide."
      },
      {
        icon: "Sparkles",
        title: "Cars and skins",
        description: "Earn coins, unlock vehicles, and customize your post-apocalyptic garage."
      },
      {
        icon: "Heart",
        title: "Dynamic pickups",
        description: "Collect hearts, wrenches, and coins while avoiding dangerous bombs."
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
