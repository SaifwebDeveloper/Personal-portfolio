import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science",
    description:
      "Strong foundation in software engineering, programming, databases, networking, and computer science fundamentals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practical Experience",
    description:
      "Hands-on experience through internships, training programs, freelance work, and real-world software projects.",
  },
  {
    icon: Sparkles,
    title: "Web + AI",
    description:
      "Focused on modern full-stack applications and practical AI-powered solutions that solve real problems.",
  },
];

const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Python",
  "MongoDB",
  "MySQL",
  "Git",
];

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-t
        border-white/5
        bg-[#020617]
        py-24
        sm:py-32
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          top-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-white/[0.018]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          bottom-[10%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-white/[0.015]
          blur-[120px]
        "
      />

      {/* ==================================================
          CONTAINER
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-white/20" />

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-gray-500
              "
            >
              About Me
            </p>
          </div>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Building with purpose,
            <span className="block text-gray-500">
              learning with curiosity.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-gray-400
              sm:text-lg
            "
          >
            I&apos;m a Computer Science graduate and Full-Stack Developer
            who enjoys turning ideas into practical, reliable, and
            user-focused software.
          </p>
        </motion.div>

        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            mt-16
            grid
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >

          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Intro Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                sm:p-8
              "
            >

              {/* Decorative glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-white/[0.035]
                  blur-3xl
                "
              />

              <div className="relative">

                {/* Icon */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                  "
                >
                  <Code2
                    size={21}
                    strokeWidth={1.6}
                    className="text-gray-300"
                  />
                </div>

                {/* Text */}
                <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-400">

                  <p>
                    I&apos;m{" "}
                    <span className="font-medium text-white">
                      Saif Ur Rehman
                    </span>
                    , a Computer Science graduate and Full-Stack Developer
                    with a focus on building modern and practical web
                    applications.
                  </p>

                  <p>
                    My experience covers both frontend and backend
                    development. I work with React and JavaScript to build
                    responsive interfaces, while Node.js, Express.js,
                    Python, MongoDB, and MySQL help me create reliable
                    backend systems.
                  </p>

                  <p>
                    I have worked on projects involving AI-powered learning
                    systems, online testing platforms, e-commerce
                    applications, and other full-stack solutions. I enjoy
                    learning new technologies and applying them to real
                    development challenges.
                  </p>

                </div>

                {/* CTA */}
                <a
                  href="#projects"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Explore my work

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </div>

            {/* ==================================================
                TECHNOLOGIES
            ================================================== */}

            <div className="mt-8">

              <div className="mb-4 flex items-center gap-3">
                <Database
                  size={16}
                  className="text-gray-500"
                />

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-gray-600
                  "
                >
                  Technologies I Work With
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <motion.span
                    key={technology}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.025]
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-gray-400
                      transition-colors
                      duration-200
                      hover:border-white/20
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT SIDE
          ================================================== */}

          <div className="space-y-4">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-6
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.04]
                  "
                >

                  <div className="flex gap-5">

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        transition-all
                        duration-300
                        group-hover:border-white/20
                        group-hover:bg-white/[0.07]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.6}
                        className="
                          text-gray-400
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">

                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className="
                            text-base
                            font-semibold
                            text-white
                          "
                        >
                          {item.title}
                        </h3>

                        <ArrowRight
                          size={16}
                          className="
                            shrink-0
                            text-gray-700
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:text-gray-300
                          "
                        />
                      </div>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-gray-500
                        "
                      >
                        {item.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* ==================================================
                CURRENT FOCUS CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.015]
                p-6
              "
            >
              <div className="flex items-center justify-between">

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-gray-600
                    "
                  >
                    Current Focus
                  </p>

                  <p className="mt-2 text-sm font-medium text-white">
                    Full-Stack Development & AI
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                  "
                >
                  <Sparkles
                    size={17}
                    className="text-gray-400"
                  />
                </div>

              </div>

              <div className="mt-5 h-px bg-white/10" />

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">

                <span className="text-xs text-gray-500">
                  React
                </span>

                <span className="text-xs text-gray-500">
                  Node.js
                </span>

                <span className="text-xs text-gray-500">
                  Python
                </span>

                <span className="text-xs text-gray-500">
                  AI
                </span>

              </div>
            </motion.div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM INFORMATION
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-16
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.015]
          "
        >

          <div className="grid sm:grid-cols-3">

            {/* Education */}
            <div className="px-6 py-6">

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-gray-600
                "
              >
                Education
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                BS Computer Science
              </p>

              <p className="mt-1 text-xs text-gray-600">
                Gomal University
              </p>
            </div>

            {/* Academic */}
            <div
              className="
                border-t
                border-white/10
                px-6
                py-6
                sm:border-l
                sm:border-t-0
              "
            >

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-gray-600
                "
              >
                Academic Performance
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                CGPA 3.86 / 4.00
              </p>

              <p className="mt-1 text-xs text-gray-600">
                Computer Science
              </p>
            </div>

            {/* Development */}
            <div
              className="
                border-t
                border-white/10
                px-6
                py-6
                sm:border-l
                sm:border-t-0
              "
            >

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-gray-600
                "
              >
                Development Focus
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                Full-Stack Web Development
              </p>

              <p className="mt-1 text-xs text-gray-600">
                Web · Backend · AI
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;