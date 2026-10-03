import { motion } from "framer-motion";

import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
  Wrench,
  ArrowRight,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Building responsive and modern user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Developing APIs, server-side logic, and applications.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "PHP",
      "Laravel",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Working with structured and NoSQL data systems.",
    skills: [
      "MongoDB",
      "MySQL",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    title: "AI & Data",
    icon: BrainCircuit,
    description: "Exploring practical AI and data-driven solutions.",
    skills: [
      "Python",
      "AI Integration",
      "Data Analytics",
      "Prompt Engineering",
      "Google Data Analytics",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    description: "Development tools and technologies used in projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "Vite",
      "XAMPP",
      "NPM",
    ],
  },
  {
    title: "Networking",
    icon: Globe,
    description:
      "Understanding networks, protocols, and communication systems.",
    skills: [
      "TCP/IP",
      "UDP",
      "SIP",
      "PJSIP",
      "VoIP",
      "Asterisk PBX",
    ],
  },
];

const workflow = [
  "Plan",
  "Develop",
  "Test",
  "Debug",
  "Deploy",
];

function Skills() {
  return (
    <section
      id="skills"
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
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.018]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[5%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.015]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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
              Skills & Technologies
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
            The tools behind
            <span className="block text-gray-500">
              the work I build.
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
            A practical technology stack built around full-stack
            development, databases, AI, networking, and modern
            development workflows.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div
          className="
            mt-16
            grid
            gap-4
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
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
                {/* Card Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-white/[0.025]
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

                  {/* Title */}
                  <div className="mt-6 flex items-center justify-between">
                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {category.title}
                    </h3>

                    <ArrowRight
                      size={16}
                      className="
                        text-gray-700
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-gray-300
                      "
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      min-h-[48px]
                      text-sm
                      leading-6
                      text-gray-500
                    "
                  >
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          y: -2,
                        }}
                        className="
                          rounded-lg
                          border
                          border-white/10
                          bg-black/20
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-gray-400
                          transition-all
                          duration-200
                          hover:border-white/20
                          hover:bg-white/[0.04]
                          hover:text-white
                        "
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Development Workflow */}
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
            mt-5
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.015]
          "
        >
          <div className="flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            {/* Workflow Info */}
            <div className="flex items-center gap-4">
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
                "
              >
                <GitBranch
                  size={20}
                  strokeWidth={1.6}
                  className="text-gray-400"
                />
              </div>

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
                  Development Workflow
                </p>

                <h3 className="mt-1 text-base font-semibold text-white">
                  From idea to deployment
                </h3>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="flex flex-wrap items-center gap-2">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-2"
                >
                  <span
                    className="
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.025]
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-gray-400
                    "
                  >
                    {step}
                  </span>

                  {index < workflow.length - 1 && (
                    <ArrowRight
                      size={13}
                      className="text-gray-700"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Tech Summary */}
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
            mt-5
            rounded-2xl
            border
            border-white/10
            bg-white/[0.015]
            p-6
            sm:p-7
          "
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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
                Core Stack
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                Full-Stack Web Development & AI
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Express.js",
                "Python",
                "MongoDB",
                "MySQL",
              ].map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-xs
                    text-gray-400
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;