import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../utils/animations";

export default function Home() {
    return (
        <section className="min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >

                    <p className="text-violet-400 uppercase tracking-widest">
                        Welcome to my Portfolio
                    </p>

                    <h1 className="text-6xl font-bold mt-5">
                        Hi, I'm
                        <br />
                        <span className="text-violet-500">
                            Varshini Kamala
                        </span>
                    </h1>

                    <h2 className="text-3xl text-gray-400 mt-5">
                        Full Stack Developer
                    </h2>

                    <p className="text-gray-400 mt-8 leading-8">
                        I design and develop responsive, scalable, and user-focused web applications using React.js, JavaScript, PHP, MySQL, and modern web technologies. I enjoy transforming ideas into fast, accessible, and engaging digital experiences.
                    </p>

                    <div className="mt-10 flex gap-5">

                        <button className="bg-violet-600 px-7 py-3 rounded-full hover:bg-violet-700 duration-300">
                            View Projects
                        </button>

                        <button className="border border-violet-600 px-7 py-3 rounded-full hover:bg-violet-600 duration-300">
                            Contact Me
                        </button>

                    </div>

                </motion.div>

                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    animate={{
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity
                    }}
                >

                    <div className="relative flex justify-center">
                        <div className="w-80 h-80 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 p-2 shadow-2xl">
                            <img
                            src="/profile.png"
                            alt="Varshini Kamala"
                            className="w-full h-full rounded-full object-cover bg-[#050816]"
                            />
                        </div>
                    </div>

                </motion.div>

            </div>

        </section>
    );
}