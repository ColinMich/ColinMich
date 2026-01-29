import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import traffic from "../assets/traffic.png";
import emotion from "../assets/emotion.jpeg";
import eggboiler from "../assets/eggboiler.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Software Developer Engineer",
    company_name: "Toric",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "July 2025 - Present",
    points: [
      "Frontend Development: Translated Figma designs into responsive, dynamic interfaces using React, Next.js, and TypeScript, delivering fast, accessible user experiences across devices",
      "Backend Engineering: Built and optimized RESTful APIs with Node.js, Express, and PostgreSQL, emphasizing clean architecture, performance, and maintainability",
      "Payment Integration: Implemented Stripe for secure transactions and subscription management, integrating with custom authentication and user flows",
      "Cloud & DevOps: Deployed full-stack applications on AWS, containerized services with Docker, and automated testing and deployments using GitHub Actions and CI/CD pipelines",
      "AI & Machine Learning: Trained and integrated a Siamese neural network for similarity detection, leveraging Python, TensorFlow, and efficient model-serving techniques",
      "Collaboration & Process: Worked in agile, feedback-driven teams focused on iterative improvement, disciplined development, and evidence-based innovation."
    ],
  },
  {
    title: "Software Engineer Trainee",
    company_name: "Toric",
    icon: reactjs,
    iconBg: "#383E56",
    date: "July 2024 - July 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Adaptive Traffic Signal Optimisation",
    description:
      "Simulation-based smart traffic control system built using SUMO and Python. The system dynamically adjusts traffic signal timings based on real-time vehicle flow to minimize average waiting time and improve overall traffic efficiency. Includes fixed-timing and Q-learning based adaptive control strategies.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sumo",
        color: "green-text-gradient",
      },
      {
        name: "reinforcement-learning",
        color: "pink-text-gradient",
      },
    ],
    image: traffic, // add a SUMO simulation screenshot
    source_code_link: "https://github.com/ColinMich/Adaptive-Traffic-Control",
  },

  {
    name: "Emotion Wellness Partner",
    description:
      "AI-powered emotion detection web application that analyzes facial expressions using OpenCV and a CNN model trained on the FER-13 dataset. The system stores persistent emotional states and recommends personalized music and activities to improve emotional well-being.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "deep-learning",
        color: "pink-text-gradient",
      },
    ],
    image: emotion, // webcam/emotion UI screenshot
    source_code_link: "https://github.com/",
  },

  {
    name: "Interactive Egg Boiler",
    description:
      "A simple and interactive React-based application that allows users to set egg boiling preferences (soft, medium, hard). Features a visual timer, real-time countdown, and clean UI to demonstrate React hooks and component state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "ui-logic",
        color: "pink-text-gradient",
      },
    ],
    image: eggboiler, // minimal UI screenshot
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
