import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#050816]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-extrabold tracking-wide"
          >
            <span className="text-white">Varshini</span>
            <span className="text-violet-500">.</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-300 font-medium ${
                    isActive
                      ? "text-violet-400"
                      : "text-gray-300 hover:text-violet-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Resume Button */}
          <a
            href="/Varshini_Kamala_Resume.pdf"
            className="hidden md:block bg-violet-600 hover:bg-violet-700 transition px-5 py-2 rounded-full font-medium"
          >
            Resume
          </a>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1120] border-t border-white/10">
          <nav className="flex flex-col py-5">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 transition ${
                    isActive
                      ? "text-violet-400"
                      : "text-gray-300 hover:text-violet-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="/resume.pdf"
              className="mx-6 mt-4 bg-violet-600 text-center py-3 rounded-full hover:bg-violet-700 transition"
            >
              Download Resume
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;