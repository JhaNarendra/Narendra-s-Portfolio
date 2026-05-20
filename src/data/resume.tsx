import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Zap, Network, Server, Glasses, Headset } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Unity } from "@/components/ui/svgs/unity";
import { GoogleCloud } from "@/components/ui/svgs/gcp";
import { Unreal } from "@/components/ui/svgs/unreal";


export const DATA = {
  name: "Narendra Kumar Jha",
  initials: "NKJ",
  url: "https://dillion.io",
  location: "Greater Noida,Uttar Pradesh India",
  locationLink: "https://maps.app.goo.gl/zBADCBLPsBV9LJje6",
  description:
    "A software engineer turned into a Unity XR & Multiplayer Developer with a passion for building immersive and interactive experiences.",
  summary:
    "My creative coding journey began in 2019 during my B.Tech studies. After exploring various programming languages, I quickly pivoted to the creative 3D industry, mastering Unity to build AR, VR, and video game applications. Throughout university, I actively competed in hackathons and mentored fellow students. By 2022, I officially entered the industry, collaborating tightly with enterprise companies and Web3 blockchain developers. Transitioning from academia to shipped commercial products taught me how to architect complex systems, manage robust pipelines, and deliver highly-optimized interactive experiences in a professional, organized manner.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Unity", icon: Unity },
    { name: "Photon", icon: Zap },
    { name: "Mirror", icon: Network },
    { name: "PlayFab", icon: Server },
    { name: "Google Cloud", icon: GoogleCloud },
    { name: "GitHub", icon: Icons.github },
    { name: "AR", icon: Glasses },
    { name: "VR", icon: Headset },
    { name: "C++", icon: Csharp },
    { name: "C#", icon: Csharp },
    { name: "Unreal Engine", icon: Unreal },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "naren.kumar.jha@gmail.com",
    tel: "9354016480",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JhaNarendra",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/narendrakumarjha/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/cele5tial_dev",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@CelestialGamz",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:naren.kumar.jha@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Compact Gyan",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Game Developer",
      logoUrl: "/c.svg",
      start: "April 2022",
      end: "October 2022",
      description:
        "Developed interactive 3D animations and core gameplay functionalities to visually explain complex educational concepts, delivering an immersive and engaging learning experience tailored for children.",
    },
    {
      company: "Abhiwan Technology Pvt. Ltd.",
      badges: [],
      href: "https://www.abhiwan.com/about",
      location: "Remote",
      title: "Game Developer",
      logoUrl: "/a.svg",
      start: "August 2022",
      end: "December 2023",
      description:
        "Spearheaded development across diverse domains including Augmented Reality, Oculus Quest 2 Virtual Reality, WebRTC networking, and RPGs. Applied strict Object-Oriented Programming (OOP) principles and robust version control practices to maintain scalable codebases. Served as the Lead Game Developer for 'Intrant Inferis', an on-chain rogue-like action dungeon RPG mobile game powered by the Solana Blockchain and Unity.",
    },
    {
      company: "IntoTheVerse Inc.",
      href: "https://intotheverse.xyz/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/i.svg",
      start: "January 2024",
      end: "March 2026",
      description:
        "Designed and developed standalone RPGs and hypercasual games, integrating Web3 blockchain plugins for seamless on-chain functionality. Engineered, tested, and deployed dedicated Unity Linux servers to facilitate robust multiplayer synchronization and gameplay.",
    }
  ],
  education: [
    {
      school: "Jaypee University of Engineering Technology",
      href: "https://www.juet.ac.in/",
      degree: "Bachelor of Technology",
      logoUrl: "/j.svg",
      start: "2019",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "Intrant Inferis",
      href: "https://intotheverse.xyz/",
      dates: "September 2023 - may 2024",
      active: false,
      description:
        "Developed Intrant Inferis, a Free-to-Play on-chain rogue-like action RPG powered by Solana. Focused on bridging Web2 UX with Web3 by featuring automated reward distribution, fully on-chain wager duels, weekly challenges, and a seamless mobile-accessible infrastructure.",
      technologies: [
        "Unity",
        "C#",
        "Solana",
        "Timeline",
        "Cinemachine",
        "Mirror",
        "Navmesh",
      ],
      links: [
        {
          type: "Website",
          href: "https://intotheverse.xyz/game#intro",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/IntrantDemo.mp4",
    },
    {
      title: "Furi-Fighter",
      href: "",
      dates: "May 2024 - September 2024",
      active: false,
      description:
        "Developed a fast-paced multiplayer battle royale game inspired by Zooba, featuring diverse animal characters and unique weapon combat systems. Engineered scalable backend infrastructure using PlayFab for player progression, matchmaking, and data management, alongside dedicated servers for real-time multiplayer synchronization.",
      technologies: [
        "Unity",
        "C#",
        "PlayFab",
        "Dedicated Servers",
        "Photon",
        "Multiplayer",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "APT-Horse",
      href: "",
      dates: "February 2024 - April 2024",
      active: false,
      description:
        "Engineered an on-chain multiplayer racing game using Unity and C#. Integrated complex blockchain mechanics for provably fair randomness, implemented real-time gameplay simulation, and designed an economic player staking system for competitive engagement.",
      technologies: [
        "Unity",
        "C#",
        "Aptos Blockchain",
        "Smart Contracts",
        "Multiplayer",
        "Web3",
      ],
      links: [],
      image: "",
      video: "/APTHorse.mp4",
    },
    {
      title: "Sushi-Nads",
      href: "https://sushinads.fun/",
      dates: "November 2025 - March 2026",
      active: true,
      description:
        "Developed and stabilized Sushi Nads, a fast-paced, Overcooked-style cooking management game fully integrated into the Web3 ecosystem. Built for cross-platform play (Android and WebGL), the game seamlessly blends arcade-style culinary gameplay with blockchain features—allowing players to natively login via social accounts, dynamically mint Chef NFTs, and manage gameplay sessions on the Monad testnet without friction.",
      technologies: [
        "Unity 3D",
        "C#",
        "WebGL",
        "Privy (Auth & Embedded Wallets)",
        "Monad Testnet",
        "REST APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://sushinads.fun/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Sushi-Nads-Demo.mp4",
    },
    {
      title: "AR Portal",
      href: "",
      dates: "April 2021 - June 2021",
      active: false,
      description:
        "Developed an immersive Augmented Reality portal application using AR Foundation. By scanning real-world surfaces, users can spawn and step through a virtual doorway into completely different 360° environments, ranging from isolated cosmic spacescapes to fully-furnished virtual rooms.",
      technologies: [
        "Unity 3D",
        "C#",
        "AR Foundation",
        "Augmented Reality",
      ],
      links: [],
      image: "",
      video: "/AR-Portal.mp4",
    },
    {
      title: "Human Anatomy AR",
      href: "",
      dates: "March 2022 - April 2022",
      active: false,
      description:
        "Engineered an educational Augmented Reality application designed to teach human anatomy interactively. The app augments a detailed 3D human model into the user's environment alongside dynamic world-space UI labels explicitly identifying biological regions such as the stomach, waist, eyes, and head.",
      technologies: [
        "Unity 3D",
        "C#",
        "AR Foundation",
        "Educational Tech",
      ],
      links: [],
      image: "",
      video: "/HumanAnatomyAR.mp4",
    },
    {
      title: "Cyber Strike VR",
      href: "",
      dates: "May 2022 - July 2022",
      active: false,
      description:
        "Created an intense Virtual Reality rhythm-combat game heavily inspired by Beat Saber. Players dual-wield a responsive laser blaster and a physical energy sword to shoot and slash approaching colored targets within a high-speed virtual horizon. Features precision collision detection, fluid saber physics, and a fast-paced timer-based scoring system.",
      technologies: [
        "Unity 3D",
        "C#",
        "Oculus VR",
        "Virtual Reality",
      ],
      links: [],
      image: "",
      video: "/CyberStrikeDemo.mp4",
    },
  ],
  hackathons: [
    {
      title: "AR-VR Talent Hunt Hackathon",
      dates: "February 1- 7th, 2022",
      location: "Virtual",
      description:
        "3d Survival game consisting of player who have to survive from point a to point b while collecting points and surviving challenges like monster calemeties etc.",
      video: "",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/HackCert.jpg",
        },
      ],
    },
    {
      title: "Solana HyperDrive Hackathon",
      dates: "September 6th- October 15th, 2023",
      location: "Virtual",
      description:
        "Developed Intrant Inferis, a Free-to-Play on-chain rogue-like action RPG powered by Solana. Focused on bridging Web2 UX with Web3 by featuring automated reward distribution, fully on-chain wager duels, weekly challenges, and a seamless mobile-accessible infrastructure.",
      video: "/Intrant_Inferis_HyperDrive.mp4",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Aptos Random Hack",
      dates: "February 21st- April 9th, 2024",
      location: "Virtual",
      description:
        "Developed an on-chain multiplayer racing game integrating blockchain-based randomness, player staking, and real-time gameplay simulation using Unity and C#.",
      video: "/APTHorse.mp4",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }

  ],
} as const;