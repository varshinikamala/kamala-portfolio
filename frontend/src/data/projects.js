import ecommerce from "../assets/images/fario-ecommerce.png";
import campus from "../assets/images/fario-campus.png";
import fariocms from "../assets/images/farioCMS.png";
import jeyam from "../assets/images/Jeyam-Designers.png";
import lms from "../assets/images/Login-HRMbase.png";
import portfolio from "../assets/images/kamala-portfolio.png";
import interview from "../assets/images/Interview-Questions.png";


const projects = [
  {
    id: 1,
    title: "FarioCMS - Corporate Content Management System",
    image: fariocms,
    description:
      "Developed a dynamic Corporate CMS that enables businesses to manage website content through an intuitive admin panel. Includes page management, sliders, banners, news, events, galleries, testimonials, file manager, and global settings.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "PHP",
      "MySQL",
    ],
    demo: "https://demo.envisionalive.com/farioCMS",
  },

  {
    id: 2,
    title: "FarioCampus - Educational Management System",
    image: campus,
    description:
      "Designed and developed a Campus CMS for schools and colleges to manage departments, courses, faculty, exam results, downloads, events, galleries, and academic information through a powerful admin dashboard.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "PHP",
      "MySQL",
    ],
    demo: "https://demo.envisionalive.com/fario-campus",
  },

  {
    id: 3,
    title: "FarioCommerce - E-Commerce CMS",
    image: ecommerce,
    description:
      "Built a complete E-Commerce CMS with product management, categories, shopping cart, checkout, payment gateway integration, banners, and an easy-to-use admin panel for managing online stores.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "PHP",
      "MySQL",
    ],
    demo: "https://demo.envisionalive.com/fario-ecommerce",
  },

  {
    id: 4,
    title: "Personal Portfolio Website",
    image: portfolio,
    description:
      "Designed and developed a modern personal portfolio website showcasing my projects, technical skills, and experience. Built with smooth animations, responsive layouts, and an integrated contact form using PHPMailer.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "PHP",
      "PHPMailer",
    ],
    github: "https://github.com/varshinikamala/kamala-portfolio",
    demo: "https://kamala-portfolio-five.vercel.app/",
  },

  {
    id: 5,
    title: "Jeyam designers",
    image: jeyam, 
    description:
      "Developed a dynamic CMS-powered website for a construction company, enabling administrators to manage and update website content through a centralized admin panel. All website content is dynamically rendered from the CMS, making it easy to manage company information, services, projects, and other business content without modifying the code.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML5",
      "JavaScript",
      "Bootstrap 5",
    ],

    github: "",
    demo: "https://demo.envisionalive.com/jeyam-cms/",
  },

  {
    id: 6,
    title: "Candidate Assessment & Recruitment Platform",
    image: interview,
    description:
      "Designed and developed an online Candidate Assessment & Recruitment Platform using React.js, PHP, and MySQL. The application provides multiple assessment rounds, coding challenges, automated scoring, and a secure admin dashboard to manage candidates, questions, and performance reports.",

    technologies: [
      "React.js",
      "Tailwind CSS",
      "PHP",
      "MySQL",
      "JavaScript",
    ],

    github: "",
    demo: "https://interview-questions.infinityfree.io/",
  },

  {
    id: 7,
    title: "Leave & Task Reporting System",
    image: lms, // Add an image named leave-task.jpg
    description:
      "Developed a Leave & Task Reporting System that streamlines employee leave requests, task assignment, task tracking, and daily reporting through a secure role-based admin dashboard. The system improves team collaboration and workflow management.",

    technologies: [
      "PHP",
      "Filament",
      "MySQL",
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "Bootstrap 5",
    ],

    github: "",
    demo: "https://infario.hrmbase.com/admin/login",
  },
];

export default projects;