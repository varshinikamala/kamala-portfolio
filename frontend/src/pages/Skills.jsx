import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  const SkillSection = ({ title, data }) => (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="bg-[#111827] border border-gray-700 rounded-2xl p-6 text-center hover:border-violet-500 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold">
              {skill}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="bg-[#050816] text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-violet-400">
            Technical Expertise
          </p>

          <h1 className="text-5xl font-bold mt-4">
            My Skills
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            A collection of technologies, tools, and development practices
            that I use to build modern, scalable, and high-performance
            web applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="mt-20">

          <SkillSection
            title="Frontend Development"
            data={skills.frontend}
          />

          <SkillSection
            title="Backend Development"
            data={skills.backend}
          />

          <SkillSection
            title="Tools & Platforms"
            data={skills.tools}
          />

          <SkillSection
            title="Additional Skills"
            data={skills.other}
          />

        </div>

      </div>
    </section>
  );
}

export default Skills;