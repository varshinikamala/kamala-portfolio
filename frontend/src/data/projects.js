import ecommerce from "../assets/images/ecommerce.jpg";
import church from "../assets/images/church.jpg";
import signLanguage from "../assets/images/sign-language.jpg";
import aiShowcase from "../assets/images/ai-showcase.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: ecommerce,
    description:
      "A modern e-commerce application with secure checkout, PayPal & UPI payment integration, product management, and responsive UI.",
    technologies: [
      "React.js",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "REST API",
    ],
    github: "https://github.com/yourusername/ecommerce",
    demo: "#",
  },

  {
    id: 2,
    title: "Church Management System",
    image: church,
    description:
      "A CMS-based church website with blogs, parish information, events, galleries, SEO-friendly pages, and a custom admin panel.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
    github: "https://github.com/yourusername/church-management",
    demo: "#",
  },

  {
    id: 3,
    title: "Sign Language Recognition",
    image: signLanguage,
    description:
      "Real-time sign language recognition using TensorFlow.js and webcam input to convert ASL gestures into readable text.",
    technologies: [
      "React.js",
      "TensorFlow.js",
      "JavaScript",
    ],
    github: "https://github.com/yourusername/sign-language",
    demo: "#",
  },

  {
    id: 4,
    title: "AI Technology Showcase",
    image: aiShowcase,
    description:
      "A modern responsive website highlighting Artificial Intelligence and Robotics concepts using interactive UI and animations.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/yourusername/ai-showcase",
    demo: "#",
  },
];

export default projects;