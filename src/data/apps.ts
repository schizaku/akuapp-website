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

export type AppFaq = {
  question: string;
  answer: string;
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
  faqs: AppFaq[];
  appStore: StoreLink;
  googlePlay: StoreLink;
};

const placeholder = (size: string, background: string, text: string) =>
  `https://placehold.co/${size}/${background}/f8fafc/png?text=${encodeURIComponent(text)}`;

export const apps: AppInfo[] = [
  {
    slug: "resteye",
    name: "RestEye",
    category: "Utility",
    tagline: "Night Light & Blue Light Filter for Eye Care.",
    shortDescription:
      "Protect your eyes from blue light, reduce digital eye strain, and improve sleep quality with customizable night filters and eye care exercises.",
    description: [
      "RestEye is a dedicated eye protection and screen wellness utility designed to reduce blue light exposure, eliminate screen glare in low-light environments, and establish healthier digital habits.",
      "Featuring an ultra-smooth screen dimmer and scientifically tuned color spectrums (Warm Candle, Sunset Glow, Forest Green, Moonlight, Deep Night), RestEye filters harsh blue wavelengths that disrupt your natural circadian rhythm and melatonin production.",
      "With smart automated scheduling (including local sunset-to-sunrise sync), structured 20-20-20 break reminders, and guided optometrist-designed eye exercises, RestEye helps you work and browse comfortably while keeping your eyes relaxed and rested."
    ],
    icon: "/assets/apps/resteye/logo.png",
    featureGraphic: "/assets/apps/resteye/feature-graphic.png",
    screenshots: [
      "/assets/apps/resteye/screen-1.png",
      "/assets/apps/resteye/screen-2.png",
      "/assets/apps/resteye/screen-3.png",
      "/assets/apps/resteye/screen-4.png"
    ],
    accent: "from-amber-400 via-orange-400 to-indigo-400",
    features: [
      {
        icon: "Sparkles",
        title: "Custom Night Filters",
        description: "Choose from Warm Candle, Sunset Glow, Forest Green, and Moonlight presets with precision color temperature tuning."
      },
      {
        icon: "Gauge",
        title: "Deep Screen Dimmer",
        description: "Reduce display brightness far below standard system limits for soothing reading in pitch-black rooms."
      },
      {
        icon: "Bell",
        title: "Automated Scheduling",
        description: "Set custom hours or automatically synchronize filter activation with local astronomical sunset and sunrise."
      },
      {
        icon: "Heart",
        title: "Guided Eye Exercises",
        description: "Structured eye relaxation routines including 20-20-20 breaks, circular tracking, and blinking therapy."
      },
      {
        icon: "Zap",
        title: "Quick Status Controls",
        description: "Instantly toggle protection and adjust intensity directly from the notification shade without opening the app."
      },
      {
        icon: "ShieldCheck",
        title: "Battery & Privacy First",
        description: "Ultra-efficient overlay rendering designed for minimal battery impact with zero personal data collection."
      }
    ],
    faqs: [
      {
        question: "How does RestEye help relieve eye strain?",
        answer: "RestEye overlays a warm, blue-light-absorbing tint onto your screen that reduces ocular fatigue, eases harsh contrast, and supports your natural circadian rhythm before sleep."
      },
      {
        question: "Can RestEye dim the screen lower than Android's minimum brightness?",
        answer: "Yes. RestEye's deep dimmer applies an extra software shading layer, allowing you to dim the screen significantly below the factory minimum brightness in pitch-black rooms."
      },
      {
        question: "Why is the 'Display Over Other Apps' permission required?",
        answer: "RestEye needs this permission strictly to draw the protective translucent color tint over your display. It does not record, capture, or inspect your screen content."
      },
      {
        question: "How does the sunset and sunrise schedule work?",
        answer: "If enabled, RestEye calculates solar sunset and sunrise times locally on your device based on approximate location coordinates. Your location never leaves your phone."
      },
      {
        question: "Where can I download RestEye?",
        answer: "RestEye is available on Google Play. You can install it directly on any Android smartphone or tablet."
      }
    ],
    appStore: { label: "Coming Soon", href: "#" },
    googlePlay: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.akuapps.resteye"
    }
  },
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
    faqs: [
      {
        question: "What does Secure QR Scanner check?",
        answer: "It scans QR codes and reviews web links for signals such as unencrypted connections, unusual domains, shortened URLs, tracking parameters, and common phishing patterns before you open them."
      },
      {
        question: "Can Secure QR Scanner work offline?",
        answer: "Yes. Core QR scanning and common result handling work on your device, while checks that depend on online services require an internet connection."
      },
      {
        question: "Is Secure QR Scanner available on iOS and Android?",
        answer: "Yes. Secure QR Scanner is available on both the Apple App Store and Google Play."
      }
    ],
    appStore: {
      label: "App Store",
      href: "https://apps.apple.com/us/app/secure-qr-scanner-safe-qr/id6757461361"
    },
    googlePlay: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.safetyqrscanner.app&hl=en"
    }
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
    faqs: [
      {
        question: "What kind of game is Driftombie?",
        answer: "Driftombie is an arcade survival driving game where you drift an armored car through zombie-filled streets, collect pickups, and build score combos."
      },
      {
        question: "How do terrain and maps affect gameplay?",
        answer: "Asphalt, sand, ice, and snow change grip and slide behavior, so each map asks for a different drifting approach."
      },
      {
        question: "Where can I download Driftombie?",
        answer: "Driftombie is available from Aku APPs on both the Apple App Store and Google Play."
      }
    ],
    appStore: {
      label: "App Store",
      href: "https://apps.apple.com/us/app/driftombie/id6777925931"
    },
    googlePlay: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.akuapps.driftombie"
    }
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
    faqs: [
      {
        question: "What is Love Cards: Couple Questions?",
        answer: "Love Cards is a conversation card app with romantic, playful, emotional, and thoughtful prompts designed to help couples connect."
      },
      {
        question: "Can couples use Love Cards together from different places?",
        answer: "Yes. Couple Room lets partners join a private room, draw cards, write answers, and respond to each other."
      },
      {
        question: "Is Love Cards available on iOS and Android?",
        answer: "Yes. Love Cards: Couple Questions is available on both the Apple App Store and Google Play."
      }
    ],
    appStore: {
      label: "App Store",
      href: "https://apps.apple.com/us/app/love-cards-couple-questions/id6778553881"
    },
    googlePlay: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.akuapps.lovecards"
    }
  },
  {
    slug: "drinkly",
    name: "Drinkly: Water Tracker & Reminder",
    category: "Lifestyle",
    tagline: "Hydrate, grow, and thrive.",
    shortDescription:
      "Stay hydrated, stay healthy, and make water drinking fun with Drinkly.",
    description: [
      "Proper hydration is key to a healthier life, but remembering to drink enough water can be a challenge. Drinkly turns your daily hydration habit into a clear, rewarding journey.",
      "Enter your height, weight, gender, and daily activity level to get a personalized daily water goal based on scientific formulas. Track your daily, weekly, and monthly progress with clean statistics, switch between ml and fl oz, and sync your progress with a Google account.",
      "Premium features make hydration more playful with weather-adaptive goals, a digital garden that grows as you log water, and cute virtual pets that stay happy when you keep up with your goals."
    ],
    icon: "/assets/apps/drinkly/logo.png",
    featureGraphic: "/assets/apps/drinkly/feature-graphic.png",
    screenshots: [
      "/assets/apps/drinkly/screen-1.jpeg",
      "/assets/apps/drinkly/screen-2.jpeg",
      "/assets/apps/drinkly/screen-3.jpeg",
      "/assets/apps/drinkly/screen-4.jpeg"
    ],
    accent: "from-sky-400 via-cyan-300 to-blue-500",
    features: [
      {
        icon: "Droplets",
        title: "Personalized goals",
        description: "Calculate a daily water target from height, weight, gender, and activity level."
      },
      {
        icon: "BarChart3",
        title: "Smart analytics",
        description: "Review daily, weekly, and monthly hydration history with clean charts."
      },
      {
        icon: "ShieldCheck",
        title: "Cloud sync",
        description: "Connect your Google account to back up data and sync across devices."
      },
      {
        icon: "Sparkles",
        title: "Garden game",
        description: "Grow beautiful virtual flowers by logging water and caring for your habit."
      },
      {
        icon: "Heart",
        title: "Virtual pets",
        description: "Keep cute digital pets happy and healthy by staying on top of hydration."
      },
      {
        icon: "Bell",
        title: "Weather goals",
        description: "Premium recommendations can adapt your target based on local weather."
      }
    ],
    faqs: [
      {
        question: "How does Drinkly calculate a water goal?",
        answer: "Drinkly uses details such as height, weight, gender, and activity level to suggest a personalized daily hydration target."
      },
      {
        question: "What can I track in Drinkly?",
        answer: "You can log water intake and review daily, weekly, and monthly hydration progress in milliliters or fluid ounces."
      },
      {
        question: "Where can I download Drinkly?",
        answer: "Drinkly is available from Aku APPs on Google Play. The iOS version has not been released yet."
      }
    ],
    appStore: { label: "App Store", href: "#" },
    googlePlay: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.akuapps.drinkly"
    }
  },
  {
    slug: "cosmic-energy",
    name: "Cosmic Energy",
    category: "Game",
    tagline: "Tap into a neon space challenge.",
    shortDescription:
      "A neon arcade game built around quick reactions, precise timing, and repeatable score-chasing runs.",
    description: [
      "Cosmic Energy is a fast neon arcade game focused on timing, reactions, and improving one run at a time. Space-inspired patterns shift as you play, asking you to read the action quickly and stay in rhythm.",
      "Each attempt is designed to be easy to understand and satisfying to replay. Quick restarts keep the focus on learning patterns, sharpening timing, and pushing beyond your previous score without a long setup.",
      "Cosmic Energy is made for short mobile sessions and players who enjoy responsive score-chasing games. Its glowing visual language keeps hazards, targets, and progress readable while the pace builds around you."
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
      },
      {
        icon: "Zap",
        title: "Quick restarts",
        description: "Jump back into the action quickly and turn every attempt into useful practice."
      },
      {
        icon: "Gauge",
        title: "Reaction challenge",
        description: "Read changing patterns, make precise moves, and stay composed as the pace rises."
      },
      {
        icon: "Gamepad2",
        title: "Short sessions",
        description: "Play focused mobile runs whenever you have a few minutes to chase a better score."
      }
    ],
    faqs: [
      {
        question: "What kind of game is Cosmic Energy?",
        answer: "Cosmic Energy is a neon arcade score-chasing game built around quick reactions, pattern reading, and precise timing."
      },
      {
        question: "Is Cosmic Energy suitable for short sessions?",
        answer: "Yes. Runs and restarts are designed for quick mobile play while still rewarding practice and score improvement."
      },
      {
        question: "Where can I download Cosmic Energy?",
        answer: "Official iOS and Android download links will be added when the AkuAPPs store listings are publicly available."
      }
    ],
    appStore: { label: "App Store", href: "#" },
    googlePlay: { label: "Google Play", href: "#" }
  },
  {
    slug: "pipe-flow",
    name: "Pipe Flow - High IQ Speed Run",
    category: "Game",
    tagline: "Connect every color. Beat the clock.",
    shortDescription:
      "A neon pipe puzzle speed run game with timed levels, smart routes, and beta difficulty feedback.",
    description: [
      "Pipe Flow - High IQ Speed Run is a fast mobile puzzle game about connecting matching colored endpoints across a clean neon board. Every level is a route-planning challenge: read the grid, draw clean paths, fill the board, and keep the timer under control.",
      "The game is currently preparing for closed beta. Beta players can rate level difficulty and report confusing, broken, or performance-heavy levels directly from the app, helping improve level order and puzzle balance before public release.",
      "Pipe Flow is built for quick sessions, readable gameplay, and a satisfying speed run loop with stars, timers, move counts, and escalating puzzle complexity."
    ],
    icon: "/assets/apps/pipe-flow/logo.png",
    featureGraphic: "/assets/apps/pipe-flow/feature-graphic.png",
    screenshots: [
      "/assets/apps/pipe-flow/screen-1.png",
      "/assets/apps/pipe-flow/screen-2.png",
      "/assets/apps/pipe-flow/screen-3.png",
      "/assets/apps/pipe-flow/screen-4.png"
    ],
    accent: "from-cyan-300 via-fuchsia-400 to-lime-300",
    features: [
      {
        icon: "Gamepad2",
        title: "Pipe puzzle routing",
        description: "Connect matching colors and complete every route without breaking the board."
      },
      {
        icon: "Gauge",
        title: "Speed run timer",
        description: "Track level time, total time, moves, and board coverage as you play."
      },
      {
        icon: "Trophy",
        title: "Stars and mastery",
        description: "Clear levels, improve your run, and chase better results through each sector."
      },
      {
        icon: "Sparkles",
        title: "Neon game feel",
        description: "Enjoy glowing endpoints, animated flow, clean feedback, and punchy completion moments."
      },
      {
        icon: "BarChart3",
        title: "Difficulty feedback",
        description: "Closed beta players can rate level difficulty to improve future level ordering."
      },
      {
        icon: "ShieldCheck",
        title: "Beta issue reports",
        description: "Report impossible levels, alternate solutions, performance issues, and UI bugs from inside the app."
      }
    ],
    faqs: [
      {
        question: "What is Pipe Flow - High IQ Speed Run?",
        answer: "Pipe Flow is a timed neon puzzle game where you connect matching colored endpoints, fill the board, and optimize your route."
      },
      {
        question: "What can closed beta testers report?",
        answer: "Testers can rate level difficulty and report impossible solutions, performance problems, confusing layouts, and interface issues from inside the app."
      },
      {
        question: "When will Pipe Flow be available?",
        answer: "Pipe Flow is preparing for closed beta. Public store links will be published here when they become available."
      }
    ],
    appStore: { label: "Coming Soon", href: "#" },
    googlePlay: { label: "Closed Beta Soon", href: "#" }
  }
];

export const getAppBySlug = (slug: string) =>
  apps.find((app) => app.slug === slug);
