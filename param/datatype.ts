import { content } from "html2canvas/dist/types/css/property-descriptors/content";
import { v4 as uuidv4 } from "uuid";

export interface TemplateData {
  profilepic: string;
  firstname: string;
  lastname: string;
  sections: any[];
}

export interface SectionData {
  id: string;
  type: string;
  title: string;
  lock: boolean;
  contents: any[];
}

export interface PointFormSection {
  id: string;
  type: string;
  title: string;
  lock: boolean;
  details: string;
}

export function newPointFormSection(): PointFormSection {
  return {
    id: uuidv4(),
    type: "1",
    title: "Title",
    lock: false,
    details: "Details\nDetails\nDetails"
  };
}

export interface ThreeColumnGridSection {
  id: string;
  type: string;
  title: string;
  lock: boolean;
  details: string;
}

export function newThreeColumnGridSection(): ThreeColumnGridSection {
  return {
    id: uuidv4(),
    type: "2",
    title: "Title",
    lock: false,
    details: "Details,Details,Details,Details,Details,Details,Details"
  };
}

export interface ContactSection {
  id: string;
  type: string;
  title: string;
  lock: boolean;
  email: string;
  contact: string;
  location: string;
  linkedIn: string;
}

export function newContactSection(): ContactSection {
  return {
    id: uuidv4(),
    type: "3",
    title: "Title",
    lock: true,
    email: "Email",
    contact: "Contact",
    location: "Location",
    linkedIn: "LinkedIn"
  };
}

export interface ExperienceContent {
  location: string;
  durationstart: string;
  durationend: string;
  subtitle: string;
  organization: string;
  details: string;
}

export function newExperienceContent(): ExperienceContent {
  return {
    location: "Location",
    durationstart: "Start Time",
    durationend: "End Time",
    subtitle: "Subtitle",
    organization: "Organization",
    details: "Details\nDetails"
  };
}

export function newExperienceSection(): SectionData {
  return {
    id: uuidv4(),
    type: "4",
    title: "Title",
    lock: false,
    contents: [newExperienceContent(), newExperienceContent()]
  };
}

export interface LevelContent {
  subtitle: string;
  level: string;
}

export function newLevelContent(): LevelContent {
  return {
    subtitle: "Subtitle",
    level: "1"
  };
}

export function newLevelSection(): SectionData {
  return {
    id: uuidv4(),
    type: "5",
    title: "Title",
    lock: false,
    contents: [newLevelContent(), newLevelContent(), newLevelContent()]
  };
}

export const sampleData: TemplateData = {
  profilepic: "",
  firstname: "Ng",
  lastname: "Chun Liang",
  sections: [
    {
      id: uuidv4(),
      type: "3",
      title: "Contact",
      lock: true,
      email: "ngchunliangy@gmail.com",
      contact: "+65 8433 2042",
      location: "3 Ghim Moh Road #10-278 Singapore 270003.",
      linkedIn: "https://www.linkedin.com/in/ng-chun-liang-09142528a"
    },
    {
      id: uuidv4(),
      type: "1",
      title: "Achievements",
      lock: false,
      details:
        "Coordinated international business trips to Abu Dhabi, Saudi Arabia, and Thailand, delivering technical product demonstrations and supporting key client engagements. Led and executed on-site software deployment and optimized system performance based on customer insights, ensuring a high-quality user experience.\nSpearheaded the research and development of an AI-based image recognition model, and successfully integrated it with our company’s software solution, contributing to the enhancement of security systems for ICA at Woodlands Checkpoint."
    },
    {
      id: uuidv4(),
      type: "4",
      title: "Work Experience",
      lock: false,
      contents: [
        {
          location: "Singapore",
          durationstart: "06/2023",
          durationend: "Present",
          subtitle: "Software Engineer",
          organization: "Teleradio Engineering Pte. Ltd.",
          details:
            "Spearheaded the development and maintenance of a standalone application designed to manage and enhance x-ray images captured by our proprietary under-vehicle surveillance systems, ensuring high-quality imaging for security inspections.\nConceived and implemented new software designs and features to modernise our application, thus improving user experience and operational efficiency.\nResearched and integrated AI-based image recognition models into the software, enabling officers to effectively identify anomalies in x-ray images."
        },
        {
          location: "Kuala Lumpur, Malaysia",
          durationstart: "05/2022",
          durationend: "08/2022",
          subtitle: "Full-Stack Web Developer",
          organization: "Antlysis Design Sdn. Bhd.",
          details:
            "Utilised HTML, CSS, and JavaScript to create web pages that accurately reflect the client’s design, ensuring compatibility across various devices and screen sizes.\nEnsured the final web pages adhered strictly to the client’s design specifications, paying meticulous attention to details such as typography, colour schemes, and layout alignment."
        },
        {
          location: "Johor Bahru, Malaysia",
          durationstart: "03/2020",
          durationend: "06/2020",
          subtitle: "Database Administrator",
          organization: "Newpages Network Sdn. Bhd.",
          details:
            "Updated and maintained product stock numbers on the company’s website to guarantee accuracy and facilitate real-time inventory tracking.\nAssisted in managing and organising product information within the company’s database, ensuring efficient data storage and retrieval."
        }
      ]
    },
    {
      id: uuidv4(),
      type: "4",
      title: "Education",
      lock: false,
      contents: [
        {
          location: "Singapore",
          durationstart: "04/2024",
          durationend: "04/2024",
          subtitle: "Basic Ionising Radiation Safety (Industrial Radiography) For R1 Certificate",
          organization: "Republic Polytechnic",
          details: ""
        },
        {
          location: "Online",
          durationstart: "02/2023",
          durationend: "03/2023",
          subtitle: "HUAWEI HCIA-AI",
          organization: "Huawei",
          details: ""
        },
        {
          location: "Malacca, Malaysia",
          durationstart: "11/2020",
          durationend: "01/2023",
          subtitle: "Bachelor of Computer Science (Hons.) Artificial Intelligence - Artificial Intelligence",
          organization: "Multimedia University (Malacca)",
          details: "CGPA: 3.87 (First Class Honours)"
        },
        {
          location: "Malacca, Malaysia",
          durationstart: "07/2018",
          durationend: "10/2020",
          subtitle: "Diploma in Information Technology - Information Technology",
          organization: "Multimedia University (Malacca)",
          details: "CGPA: 3.85"
        },
        {
          location: "Batu Pahat, Malaysia",
          durationstart: "01/2013",
          durationend: "12/2017",
          subtitle: "Sijil Pelajaran Malaysia (SPM)",
          organization: "Sekolah Menengah Kebangsaan (SMK) Munshi Sulaiman",
          details: "2A+, 1A, 1A-, 2B, 2C+, 2D"
        }
      ]
    },
    {
      id: uuidv4(),
      type: "2",
      title: "Skills",
      lock: false,
      details:
        "C,C++,C#,HTML,CSS,PHP,Visual Basic,JavaScript,Python,Java,WPF,WinForms,React.JS,Node.JS,.NET,Bootstrap,Ant Design,Material UI,Label Studio,FiftyOne,LangChain,Microsoft Visual Studio,Visual Studio Code,GitHub,MongoDB,PostgreSQL,MySQL,XAMPP,Web API,Postman,Android Studio,Adobe Photoshop,Adobe Illustrator,Adobe Premiere,Adobe After Effect"
    },
    {
      id: uuidv4(),
      type: "5",
      title: "Languages",
      lock: false,
      contents: [
        {
          subtitle: "English",
          level: "3"
        },
        {
          subtitle: "Chinese",
          level: "4"
        },
        {
          subtitle: "Malay",
          level: "3"
        }
      ]
    }
  ]
};
