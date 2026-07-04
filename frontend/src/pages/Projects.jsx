import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="bg-[#050816] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-violet-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Featured Projects
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Here are some of the projects I've worked on, showcasing my
            experience in full stack development, modern UI design,
            payment integration, and AI-based applications.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-700 hover:border-violet-500 transition"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <h2 className="text-3xl font-bold">
                  {project.title}
                </h2>

                <p className="text-gray-400 mt-5 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-5 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-full transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-violet-500 hover:bg-violet-600 px-5 py-3 rounded-full transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;