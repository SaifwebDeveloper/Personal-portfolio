import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const stats = [
  {
    value: "3.86",
    label: "CGPA / 4.00",
  },
  {
    value: "4+",
    label: "Internships & Programs",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SaifwebDeveloper",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saif-ur-rehman-871b26360",
    icon: FaLinkedinIn,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923468860855",
    icon: FaWhatsapp,
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#020617]
        pt-20
      "
    >

      {/* ==================================================
          BACKGROUND GRID
      ================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ==================================================
          BACKGROUND GLOW
      ================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.025]
          blur-[120px]
        "
      />

      {/* ==================================================
          SUBTLE IMAGE GLOW
      ================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[25%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.025]
          blur-[120px]
        "
      />

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-7xl
          items-center
          px-6
          py-16
          lg:px-8
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-10
          "
        >

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative z-20"
          >

            {/* Availability */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/10
                bg-white/[0.035]
                px-4
                py-2
                text-sm
                text-gray-300
                backdrop-blur-sm
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-green-400/60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-green-400
                  "
                />
              </span>

              Available for opportunities
            </motion.div>

            {/* Small Label */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-gray-500
                sm:text-sm
              "
            >
              Full-Stack Developer · AI Enthusiast
            </motion.p>

            {/* ==================================================
                MAIN HEADING
            ================================================== */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                max-w-4xl
                text-5xl
                font-bold
                leading-[1.03]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                lg:text-[72px]
              "
            >
              Building
              <span className="block text-gray-400">
                digital experiences
              </span>
              that work.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-gray-400
                sm:text-lg
              "
            >
              I&apos;m{" "}
              <span className="font-medium text-white">
                Saif Ur Rehman
              </span>
              , a Computer Science graduate and Full-Stack Developer
              focused on building modern web applications, scalable
              backend systems, and practical AI-powered solutions.
            </motion.p>

            {/* ==================================================
                BUTTONS
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >

              {/* Projects */}
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  shadow-lg
                  shadow-white/[0.05]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-gray-200
                "
              >
                View My Projects

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-white/20
                  hover:bg-white/[0.06]
                "
              >
                Let&apos;s Talk

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </motion.div>

            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
                duration: 0.6,
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <span
                className="
                  mr-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-gray-600
                "
              >
                Connect
              </span>

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.025]
                      text-gray-400
                      shadow-lg
                      shadow-black/20
                      transition-colors
                      duration-200
                      hover:border-white/20
                      hover:bg-white/[0.07]
                      hover:text-white
                    "
                    aria-label={social.name}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT SIDE
              IMAGE
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[560px]
            "
          >

            {/* Image Glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[75%]
                w-[75%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.035]
                blur-[100px]
              "
            />

            {/* Image Container */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                mx-auto
                aspect-square
                w-full
              "
            >
              <motion.img
                src="/deskgroup.webp"
                alt="Saif Ur Rehman"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                  drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]
                "
                animate={{
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* ==================================================
                FLOATING TECHNOLOGY CARD
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.5,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                absolute
                bottom-[7%]
                left-0
                z-20
                rounded-2xl
                border
                border-white/10
                bg-[#080c18]/90
                px-5
                py-4
                shadow-2xl
                shadow-black/30
                backdrop-blur-xl
              "
            >
              <p className="text-xs font-medium text-white">
                Building with
              </p>

              <p className="mt-1.5 text-[11px] text-gray-500">
                React · Node · Python · AI
              </p>
            </motion.div>

            {/* ==================================================
                AVAILABLE CARD
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                absolute
                right-0
                top-[12%]
                z-20
                rounded-2xl
                border
                border-green-400/15
                bg-[#080c18]/90
                px-4
                py-3
                shadow-2xl
                shadow-black/30
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2.5">

                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-green-400/50
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-green-400
                    "
                  />
                </span>

                <span className="text-xs font-medium text-green-400">
                  Available
                </span>
              </div>
            </motion.div>

            {/* ==================================================
                SMALL CODE CARD
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.5,
              }}
              className="
                absolute
                bottom-[1%]
                right-[4%]
                z-20
                hidden
                rounded-xl
                border
                border-white/10
                bg-[#080c18]/90
                px-4
                py-3
                shadow-2xl
                backdrop-blur-xl
                sm:block
              "
            >
              <p className="font-mono text-[10px] text-gray-500">
                &lt;code /&gt;
              </p>

              <p className="mt-1 font-mono text-[10px] text-gray-400">
                Build · Deploy · Scale
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ==================================================
          STATS
      ================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.6,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          pb-12
          lg:px-8
        "
      >
        <div
          className="
            grid
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.015]
            sm:grid-cols-3
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                flex
                items-center
                gap-4
                px-6
                py-5
                ${
                  index > 0
                    ? "border-t border-white/10 sm:border-l sm:border-t-0"
                    : ""
                }
              `}
            >
              <span
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                {stat.value}
              </span>

              <span
                className="
                  text-xs
                  leading-4
                  text-gray-500
                "
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}
      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="
          absolute
          bottom-8
          right-8
          hidden
          items-center
          gap-3
          text-gray-600
          transition-colors
          duration-200
          hover:text-white
          lg:flex
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.25em]
          "
        >
          Scroll
        </span>

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.02]
          "
        >
          <ArrowDown size={14} />
        </span>
      </motion.a>
    </section>
  );
}

export default Hero;