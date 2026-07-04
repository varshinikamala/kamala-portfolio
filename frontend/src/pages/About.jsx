import { motion } from "framer-motion";
import {
    FaCode,
    FaLaptopCode,
    FaDesktop,
    FaServer,
    FaDatabase,
    FaProjectDiagram,
    FaRocket,
} from "react-icons/fa";


function About() {
    return (
        <section className="bg-[#050816] text-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="uppercase tracking-[5px] text-violet-400">
                        Get To Know Me
                    </p>

                    <h2 className="text-5xl font-bold mt-4">
                        About Me
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
                        Passionate about building modern, scalable, and user-friendly web
                        applications that combine beautiful interfaces with powerful
                        functionality.
                    </p>
                </motion.div>

                {/* About Content */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto mt-20"
                >
                    <span className="text-violet-400 font-semibold uppercase tracking-widest">
                        Who I Am
                    </span>

                    <h3 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                        Creating Digital Experiences That Make an Impact
                    </h3>

                    <p className="text-gray-400 mt-8 leading-8 text-lg">
                        Hello! I'm{" "}
                        <span className="text-white font-semibold">
                            Varshini Kamala
                        </span>
                        , a passionate Full Stack Developer dedicated to creating
                        responsive, high-performance, and user-centric web applications.
                        I enjoy transforming ideas into functional digital products with
                        clean architecture and modern technologies.
                    </p>

                    <p className="text-gray-400 mt-6 leading-8 text-lg">
                        My expertise includes React.js, JavaScript, PHP, MySQL, HTML5,
                        CSS3, Bootstrap, Tailwind CSS, and jQuery. From designing intuitive
                        user interfaces to building robust backend systems, I strive to
                        deliver applications that are scalable, maintainable, and efficient.
                    </p>

                    <p className="text-gray-400 mt-6 leading-8 text-lg">
                        I believe that learning never stops. I continuously explore new
                        technologies, development practices, and innovative solutions to
                        improve my skills and build software that creates real value for
                        users and businesses.
                    </p>

                    <a
                        href="/Varshini_Kamala_Resume.pdf"
                        download
                        className="inline-flex items-center bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-full font-semibold transition"
                    >
                        Download Resume
                    </a>
                </motion.div>

                {/* Statistics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ y: -10, scale: 1.03 }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-[#111827] rounded-3xl p-8 border border-gray-700 text-center hover:border-violet-500 transition"
                    >
                        <FaLaptopCode
                            className="text-violet-400 mx-auto"
                            size={45}
                        />

                        <h2 className="text-4xl font-bold mt-5">
                            20+
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Projects Completed
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ y: -10, scale: 1.03 }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-[#111827] rounded-3xl p-8 border border-gray-700 text-center hover:border-violet-500 transition"
                    >
                        <FaCode
                            className="text-violet-400 mx-auto"
                            size={45}
                        />

                        <h2 className="text-4xl font-bold mt-5">
                            10+
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Technologies
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ y: -10, scale: 1.03 }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-[#111827] rounded-3xl p-8 border border-gray-700 text-center hover:border-violet-500 transition"
                    >
                        <FaDatabase
                            className="text-violet-400 mx-auto"
                            size={45}
                        />

                        <h2 className="text-2xl font-bold mt-5">
                            Full Stack
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Web Development
                        </p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        whileHover={{ y: -10, scale: 1.03 }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#111827] rounded-3xl p-8 border border-gray-700 text-center hover:border-violet-500 transition"
                    >
                        <FaProjectDiagram
                            className="text-violet-400 mx-auto"
                            size={45}
                        />

                        <h2 className="text-4xl font-bold mt-5">
                            100%
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Passion & Dedication
                        </p>
                    </motion.div>

                </div>

                {/* ================= My Journey ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-32"
                >

                    <div className="text-center">

                        <p className="uppercase tracking-[5px] text-violet-400">
                            My Journey
                        </p>

                        <h2 className="text-4xl font-bold mt-4">
                            From Curiosity to Full Stack Development
                        </h2>

                    </div>

                    <div className="max-w-5xl mx-auto mt-14">

                        <div className="bg-[#111827] border border-gray-700 rounded-3xl p-10">

                            <p className="text-gray-400 leading-8 text-lg">

                                My journey into software development began with a strong curiosity
                                about how technology solves real-world problems. This passion inspired
                                me to pursue Artificial Intelligence and Machine Learning while
                                simultaneously exploring Full Stack Web Development.

                            </p>

                            <p className="text-gray-400 leading-8 text-lg mt-6">

                                Throughout my learning journey, I have developed responsive websites,
                                payment gateway integrations, CMS platforms, AI-based applications,
                                and modern React projects. Every project has strengthened my
                                problem-solving abilities and helped me become a better developer.

                            </p>

                        </div>

                    </div>

                </motion.div>

                {/* ================= Education ================= */}

                <motion.section
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="mt-28"
                >

                    <div className="text-center">

                        <p className="uppercase tracking-[5px] text-violet-400">
                            Education
                        </p>

                        <h2 className="text-4xl font-bold mt-4">
                            Academic Background
                        </h2>

                    </div>

                    <div className="max-w-4xl mx-auto mt-16">

                        <div className="bg-[#111827] rounded-3xl p-10 border border-gray-700 hover:border-violet-500 transition">

                            <h3 className="text-2xl font-bold">
                                Bachelor of Artificial Intelligence & Machine Learning
                            </h3>

                            <p className="text-violet-400 mt-3">
                                Avinashilingam University
                            </p>

                            <p className="text-gray-400 mt-6 leading-8">

                                Built a strong academic foundation in programming,
                                database management, software engineering,
                                machine learning,
                                and web development while working on practical projects.

                            </p>

                        </div>

                    </div>

                </motion.section>

                {/* ================= What I Do ================= */}

                <section className="mt-32">

                    <div className="text-center">

                        <p className="uppercase tracking-[5px] text-violet-400">
                            Services
                        </p>

                        <h2 className="text-4xl font-bold mt-4">
                            What I Do
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        <motion.div

                            whileHover={{ y: -10 }}

                            className="bg-[#111827] p-10 rounded-3xl border border-gray-700"

                        >

                            <FaDesktop className="text-violet-400 text-5xl" />

                            <h3 className="text-2xl font-bold mt-6">
                                Frontend Development
                            </h3>

                            <p className="text-gray-400 mt-4 leading-8">

                                Building responsive,
                                interactive,
                                and modern user interfaces using React.js,
                                Tailwind CSS,
                                JavaScript,
                                Bootstrap,
                                and HTML/CSS.

                            </p>

                        </motion.div>
                        <motion.div

                            whileHover={{ y: -10 }}

                            className="bg-[#111827] p-10 rounded-3xl border border-gray-700"

                        >

                            <FaServer className="text-violet-400 text-5xl" />

                            <h3 className="text-2xl font-bold mt-6">
                                Backend Development
                            </h3>

                            <p className="text-gray-400 mt-4 leading-8">

                                Developing secure server-side applications,
                                REST APIs,
                                authentication,
                                and business logic using PHP and MySQL.

                            </p>

                        </motion.div>
                        <motion.div

                            whileHover={{ y: -10 }}

                            className="bg-[#111827] p-10 rounded-3xl border border-gray-700"

                        >

                            <FaDatabase className="text-violet-400 text-5xl" />

                            <h3 className="text-2xl font-bold mt-6">
                                Database Design
                            </h3>

                            <p className="text-gray-400 mt-4 leading-8">

                                Creating efficient database structures,
                                optimizing queries,
                                and maintaining secure data management
                                using MySQL.

                            </p>

                        </motion.div>
                        <motion.div

                            whileHover={{ y: -10 }}

                            className="bg-[#111827] p-10 rounded-3xl border border-gray-700"

                        >

                            <FaRocket className="text-violet-400 text-5xl" />

                            <h3 className="text-2xl font-bold mt-6">
                                Full Stack Solutions
                            </h3>

                            <p className="text-gray-400 mt-4 leading-8">

                                Delivering complete web applications
                                from UI design to deployment,
                                ensuring performance,
                                security,
                                and scalability.

                            </p>

                        </motion.div>
                    </div>

                </section>

            </div>
        </section>
    );
}

export default About;