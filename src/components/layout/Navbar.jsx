
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certification", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SaifwebDeveloper",
    icon: FaGithub,
    color:
      "text-white border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saif-ur-rehman-871b26360",
    icon: FaLinkedinIn,
    color:
      "text-cyan-400 border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/50",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923468860855",
    icon: FaWhatsapp,
    color:
      "text-green-400 border-green-400/20 bg-green-400/5 hover:bg-green-400/10 hover:border-green-400/50",
  },
];

const brandName = "SAIF UR REHMAN";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  const closeMenu = () => {
    setIsOpen(false);
  };

  // ==========================================
  // Scroll Spy
  // Detect active section based on scroll position
  // ==========================================
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 100;

      let currentSection = navigation[0].href;

      for (const item of navigation) {
        const section = document.querySelector(item.href);

        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (
          scrollPosition + navbarHeight >= sectionTop
        ) {
          currentSection = item.href;
        }
      }

      setActiveSection(currentSection);
    };

    // Run immediately on page load
    updateActiveSection();

    // Run whenever the user scrolls
    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    // Also update after resizing
    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, []);

  // ==========================================
  // Navigation Click
  // ==========================================
  const handleNavigation = (href) => {
    setActiveSection(href);
    closeMenu();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* =====================================
            Logo & Brand
        ====================================== */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Saif Ur Rehman home"
        >
          {/* Logo */}
          <img
            src="/portfolio_logo.png"
            alt="Saif Ur Rehman Logo"
            className="
              h-16
              w-16
              object-contain
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <div className="flex flex-col justify-center">

            {/* Animated Brand Name */}
            <div className="flex items-center font-sans text-xl font-extrabold uppercase">

              {brandName.split("").map((letter, index) => {
                const isSpace = letter === " ";
                const isSaif = index < 4;

                if (isSpace) {
                  return (
                    <span
                      key={`space-${index}`}
                      className="w-1.5"
                    />
                  );
                }

                return (
                  <motion.span
                    key={`${letter}-${index}`}
                    animate={{
                      y: [0, -4, 0, 4, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.12,
                    }}
                    className={`
                      inline-block
                      ${
                        isSaif
                          ? `
                            bg-gradient-to-r
                            from-blue-500
                            via-cyan-400
                            to-sky-300
                            bg-clip-text
                            text-transparent
                            drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]
                          `
                          : `
                            text-white
                            tracking-widest
                          `
                      }
                    `}
                  >
                    {letter}
                  </motion.span>
                );
              })}

            </div>

            {/* Subtitle */}
            <div className="mt-0.5 flex items-center gap-1.5">

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400/90
                "
              >
                MERN STACK DEVELOPER
              </span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-cyan-400
                  animate-pulse
                "
              />

            </div>

          </div>
        </a>

        {/* =====================================
            Desktop Navigation
        ====================================== */}
        <div className="hidden items-center gap-3 lg:flex">

          {navigation.map((item) => {
            const isActive =
              activeSection === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() =>
                  handleNavigation(item.href)
                }
                className={`
                  relative
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-cyan-400/10
                        text-cyan-400
                        shadow-[0_0_18px_rgba(34,211,238,0.08)]
                      `
                      : `
                        text-gray-400
                        hover:bg-white/5
                        hover:text-white
                      `
                  }

                  after:absolute
                  after:-bottom-1
                  after:left-1/2
                  after:h-[2px]
                  after:-translate-x-1/2
                  after:rounded-full
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300

                  ${
                    isActive
                      ? "after:w-8 after:shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      : "after:w-0"
                  }

                  ${
                    !isActive
                      ? "hover:after:w-8"
                      : ""
                  }
                `}
              >
                {item.name}
              </a>
            );
          })}

        </div>

        {/* =====================================
            Desktop Social Links + CV
        ====================================== */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Social Icons */}
          <div className="flex items-center gap-2">

            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}

                  animate={{
                    y: [0, -3, 0],
                    rotate: [
                      0,
                      index % 2 === 0 ? 1 : -1,
                      0,
                    ],
                  }}

                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    rotate: 3,
                  }}

                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}

                  className={`
                    group
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    shadow-md
                    transition-all
                    duration-300
                    ${social.color}
                  `}
                >
                  {/* Pulsing Border */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-current
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:animate-ping
                      group-hover:opacity-40
                    "
                  />

                  <Icon
                    size={18}
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </motion.a>
              );
            })}

          </div>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download
            className="
              ml-2
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-white/15
              bg-white
              px-4
              py-2.5
              text-sm
              font-semibold
              text-black
              transition-all
              duration-200
              hover:bg-gray-200
              hover:shadow-lg
              hover:shadow-white/10
            "
          >
            <Download size={16} />
            Download CV
          </a>

        </div>

        {/* =====================================
            Mobile Menu Button
        ====================================== */}
        <button
          type="button"
          onClick={() =>
            setIsOpen((previous) => !previous)
          }
          className="
            inline-flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            text-gray-300
            transition-all
            duration-200
            hover:bg-white/5
            hover:text-white
            lg:hidden
          "
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

      </nav>

      {/* =====================================
          Mobile Navigation
      ====================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              overflow-hidden
              border-t
              border-white/10
              bg-[#050505]
            "
          >

            <div className="mx-auto max-w-7xl px-6 py-5">

              <div className="flex flex-col">

                {/* Mobile Navigation Links */}
                {navigation.map((item) => {
                  const isActive =
                    activeSection === item.href;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() =>
                        handleNavigation(item.href)
                      }
                      className={`
                        relative
                        border-b
                        border-white/5
                        py-4
                        pl-3
                        text-sm
                        font-medium
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              bg-cyan-400/10
                              text-cyan-400
                            `
                            : `
                              text-gray-400
                              hover:bg-white/5
                              hover:text-white
                            `
                        }

                        ${
                          isActive
                            ? "border-l-2 border-l-cyan-400"
                            : "border-l-2 border-l-transparent"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">

                        <span>
                          {item.name}
                        </span>

                        {isActive && (
                          <span
                            className="
                              mr-2
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-cyan-400
                              shadow-[0_0_8px_rgba(34,211,238,0.9)]
                            "
                          />
                        )}

                      </div>
                    </a>
                  );
                })}

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-4 py-6">

                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}

                        animate={{
                          y: [0, -3, 0],
                          rotate: [
                            0,
                            index % 2 === 0 ? 1 : -1,
                            0,
                          ],
                        }}

                        whileHover={{
                          scale: 1.15,
                          y: -5,
                          rotate: 3,
                        }}

                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.25,
                        }}

                        className={`
                          group
                          relative
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          shadow-md
                          transition-all
                          duration-300
                          ${social.color}
                        `}
                      >
                        {/* Animated Border */}
                        <span
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            rounded-full
                            border
                            border-current
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:animate-ping
                            group-hover:opacity-40
                          "
                        />

                        <Icon
                          size={20}
                          className="
                            relative
                            z-10
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </motion.a>
                    );
                  })}

                </div>

                {/* Mobile Download CV */}
                <a
                  href="/resume.pdf"
                  download
                  onClick={closeMenu}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-white
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-200
                    hover:bg-gray-200
                  "
                >
                  <Download size={16} />
                  <Download size={16} />
                  Download CV
                </a>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar;

