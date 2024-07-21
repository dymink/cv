import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Maciej Dyminkiewicz",
  initials: "MD",
  location: "Warsaw, Poland, CET",
  locationLink: "https://www.google.com/maps/place/Warszawa/",
  about: "Im building high-quality products.",
  summary:
    "I am an experienced developer specializing in frontend development. I am passionate about expanding my knowledge of software development. To stay current in the field, I read blogs, attend tech meet-ups, and engage in hobby projects. Additionally, I have experience as a technical lead. Currently, I am developing my knowledge of Golang, AWS, and Terraform.",
  avatarUrl: "https://avatars.githubusercontent.com/u/11477332?v=4",
  personalWebsiteUrl: "https://blog.dyminkiewi.cz",
  contact: {
    email: "maciej.dyminkiewicz@gmail.com",
    tel: "+48609275005",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dymink",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maciej-dyminkiewicz-195823144",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Polish - Japanese Academy Of Information Technology",
      degree: "Postgraduate studies: Internet Technology",
      start: "2015",
      end: "2016",
    },
    {
      school: "College Of Economy And Information Technology",
      degree: "Finance",
      start: "2010",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Santander Bank Polska",
      link: "https://www.santander.pl",
      badges: ["Remote"],
      title: "Senior software engineer",

      start: "2019",
      end: "2024",
      description:
        "I was responsible for leading the frontend chapter, recommending code and architecture best practices, establishing the application requirements, discussing UX requirements, implementing the frontend side, and writing E2E tests.",
    },
    {
      company: "Pekao Financial Services Sp. z o.o",
      link: "https://www.pekao-fs.com.pl/en",
      badges: ["Remote"],
      title: "Javascript Developer",
      start: "2019",
      end: "2019",
      description:
        "I was responsible for implementing the frontend side of the employee module. From one repository, we built multiple applications for various financial institutions.",
    },
    {
      company: "Samsung",
      link: "https://samsung.pl",
      badges: ["Remote"],
      title: "Software engineer",
      start: "2016",
      end: "2019",
      description:
        "I was reponsoble for developing internal systems and writing documentation",
    },
    {
      company: "Samsung",
      link: "https://samsung.pl",
      badges: ["Remote"],
      title: "Intern",
      start: "2015",
      end: "2016",
      description:
        "I was developing GEAR S2 and GEAR S3 smartwatch applications and games.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
    "Next.js",
    "Node.js",
    "Golang",
  ],
  projects: [
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // }
  ],
} as const;
