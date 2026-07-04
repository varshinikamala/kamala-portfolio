import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setErrors({
        ...errors,
        email:
          value === ""
            ? ""
            : emailRegex.test(value)
              ? ""
              : "Please enter a valid email address.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost/kamala-portfolio/backend/api/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      setStatus({
        type: data.success ? "success" : "error",
        message: data.message,
      });

      if (data.success) {
        setStatus({
          type: "success",
          message: "success",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }

    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again later.",
      });
    }

    setLoading(false);

    setTimeout(() => {
      setStatus({
        type: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <section className="bg-[#050816] text-white py-24 min-h-screen">

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
            Get In Touch
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Contact Me
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            I'm always open to discussing new opportunities,
            exciting projects, or collaborations.
            Feel free to reach out.
          </p>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`mt-8 max-w-3xl mx-auto rounded-xl px-6 py-4 border shadow-lg ${status.type === "success"
                ? "bg-green-500/10 border-green-500 text-green-300"
                : "bg-red-500/10 border-red-500 text-red-300"
                }`}
            >
              <p className="text-base leading-7 font-medium">
                {status.type === "success"
                  ? "Thank you for your message. I've received it successfully and will get back to you soon."
                  : "Unable to send your message. Please try again."}
              </p>
            </motion.div>
          )}

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-bold">
              Let's Connect
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Whether you have a project idea,
              job opportunity,
              or simply want to connect,
              I'd love to hear from you.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4 items-center">

                <div className="bg-violet-600 p-4 rounded-full">
                  <FaEnvelope />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    varshinikamala14@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4 items-center">

                <div className="bg-violet-600 p-4 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 8838980836
                  </p>

                </div>

              </div>

              <div className="flex gap-4 items-center">

                <div className="bg-violet-600 p-4 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Coimbatore, Tamil Nadu
                  </p>

                </div>

              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/varshinikamala"
                target="_blank"
                rel="noreferrer"
                className="bg-[#111827] p-4 rounded-full hover:bg-violet-600 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/kamalanagaraj28"
                target="_blank"
                rel="noreferrer"
                className="bg-[#111827] p-4 rounded-full hover:bg-violet-600 transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </motion.div>

          {/* Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-10 rounded-3xl border border-gray-700"
          >

            <div className="mb-6">

              <label className="block mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full bg-[#1f2937] rounded-xl px-5 py-4 border border-gray-600 outline-none focus:border-violet-500"
              />

            </div>

            <div className="mb-6">

              <label className="block mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full bg-[#1f2937] rounded-xl px-5 py-4 border border-gray-600 outline-none focus:border-violet-500"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email}
                </p>
              )}

            </div>

            <div className="mb-6">

              <label className="block mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full bg-[#1f2937] rounded-xl px-5 py-4 border border-gray-600 outline-none focus:border-violet-500"
              />

            </div>

            <div className="mb-8">

              <label className="block mb-2">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                className="w-full bg-[#1f2937] rounded-xl px-5 py-4 border border-gray-600 outline-none focus:border-violet-500 resize-none"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-600 hover:bg-violet-700 py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;