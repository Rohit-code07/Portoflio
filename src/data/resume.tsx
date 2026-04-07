import { Icons } from "@/components/icons";
import React from "react";
import { CopyPlus, HomeIcon, NotebookIcon } from "lucide-react";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import {SpringBoot} from "@/components/ui/svgs/spring";
import { HTML } from "@/components/ui/svgs/html";
import { DSA } from "@/components/ui/svgs/DSA";
import { C } from "@/components/ui/svgs/c";
import { CSS } from "@/components/ui/svgs/css";
import { MySQL } from "@/components/ui/svgs/mysql";
import { CPP} from "@/components/ui/svgs/Cplus";
export const DATA = {
  name: "Rohit Verma",
  initials: "DV",
  url: "https://dillion.io",
  location: "India",
locationLink: "https://www.google.com/maps/place/india",
description:
  "Backend Developer passionate about building real-world applications.",
summary:
  "I’m Rohit Verma, a backend-focused developer passionate about building real-world applications using Java and Spring Boot. Recently, I built MedoraX, a healthcare project designed to simplify medicine management and daily tracking. I also enjoy solving Data Structures & Algorithms problems and continuously improving my problem-solving skills, while exploring frontend technologies to grow as a full-stack developer.",
avatarUrl: "/me.png",
  skills: [
    { name: "C", icon: C },
     { name: "Spring Boot", icon: SpringBoot },
    { name: "Data structure and Algorithm", icon: DSA },
    { name: "CSS", icon: CSS },
    { name: "HTML", icon: HTML },
    { name: "C++", icon: CPP},
    { name: "MYSQL", icon: MySQL },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rohithit2466@gmail.com",
    tel: "+91 9617377586",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rohit-code07",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohit-verma-15b975304/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RohitVerma16681",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  
  education: [
    {
      school: "Swami Atmanand Government English Medium Schools",
      href: "https://www.govtmodelcollegedurg.ac.in/",
      degree: "10th - 12th",
      logoUrl: "/SAGESlogo.jpeg",
      start: "2022",
      end: "2024",
    },
    {
      school: "Shri Shankaracharya Technical Campus",
      href: "https://sstc.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/sstclogo.jpeg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "MedoraX",
      href: "https://chatcollect.com",
      dates: "March 2026 - April 2026",
      active: true,
      description:
  "With the vision of simplifying healthcare through AI, I built MedoraX — an intelligent medicine reminder and health management platform powered by MedIntel AI. Leveraging the Gemini API, the system delivers smart insights, personalized medication guidance, and real-time reminders, creating a seamless and scalable digital healthcare experience.",
      technologies: [
        "Spring Boot",
        "Java",
        "MYSQL",
        "Hibernate",
        "TailwindCSS",
        "HTML",
        "Javascript",
        "Intellij",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/MedoraX.png",
      video:
        "",
    },
    
  ],
  hackathons: [
    {
      title: "Prayatna 3.0",
      dates: "28th Febuary, 2026",
      location: "Indore, India",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/prayatana3.0.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    links: [] as Array<{ title: string; href: string; icon: React.ReactNode }>,
    },
    {
      title: "Hackathon On Application Of Cyber Intelligence For Nation Security",
      dates: " 21th march,2026",
      location: "IIT Bhilai",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "/iitbhilailogo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    links: [] as Array<{ title: string; href: string; icon: React.ReactNode }>,
    },
  ],
} as const;