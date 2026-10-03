import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Globe,
  Sparkles,
  Code2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "../../data/projects";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
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
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
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
          right-[-200px]
          bottom-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-white/[0.015]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
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
              Selected Work
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
            Projects built to
            <span className="block text-gray-500">
              solve real problems.
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
            A selection of real-world applications, final year work,
            and learning projects built across full-stack development,
            AI, and modern web technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mt-16 space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -3,
              }}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.035]
              "
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                {/* Project Preview */}
                <div
                  className="
                    relative
                    min-h-[300px]
                    overflow-hidden
                    border-b
                    border-white/10
                    bg-[#050a14]
                    lg:min-h-[420px]
                    lg:border-b-0
                    lg:border-r
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-64
                      w-64
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-white/[0.025]
                      blur-[100px]
                    "
                  />

                  <div
                    className="
                      absolute
                      left-5
                      right-5
                      top-8
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/10
                      bg-[#020617]
                      shadow-2xl
                      sm:left-10
                      sm:right-10
                      sm:top-12
                    "
                  >
                    {/* Browser Header */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        border-b
                        border-white/10
                        px-4
                        py-3
                      "
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

                      <div
                        className="
                          ml-3
                          h-6
                          flex-1
                          rounded-md
                          border
                          border-white/5
                          bg-white/[0.025]
                        "
                      />
                    </div>

                    {/* Browser Content */}
                    <div className="p-5 sm:p-7">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-white/10
                              bg-white/[0.04]
                            "
                          >
                            {project.category.includes("AI") ? (
                              <Sparkles
                                size={14}
                                className="text-gray-400"
                              />
                            ) : project.category ===
                              "Web Application" ? (
                              <Globe
                                size={14}
                                className="text-gray-400"
                              />
                            ) : (
                              <FolderGit2
                                size={14}
                                className="text-gray-400"
                              />
                            )}
                          </div>

                          <div className="h-3 w-24 rounded bg-white/10" />
                        </div>

                        <div className="h-7 w-16 rounded-md bg-white/5" />
                      </div>

                      <div className="mt-7 space-y-3">
                        <div className="h-7 w-4/5 rounded bg-white/10" />

                        <div className="h-3 w-full rounded bg-white/5" />

                        <div className="h-3 w-5/6 rounded bg-white/5" />
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div
                          className="
                            h-20
                            rounded-xl
                            border
                            border-white/5
                            bg-white/[0.025]
                          "
                        />

                        <div
                          className="
                            h-20
                            rounded-xl
                            border
                            border-white/5
                            bg-white/[0.025]
                          "
                        />
                      </div>

                      <div
                        className="
                          mt-3
                          h-20
                          rounded-xl
                          border
                          border-white/5
                          bg-white/[0.025]
                        "
                      />
                    </div>
                  </div>

                  {/* Category Label */}
                  <div
                    className="
                      absolute
                      bottom-7
                      left-7
                      hidden
                      rounded-lg
                      border
                      border-white/10
                      bg-black/60
                      px-4
                      py-2
                      text-xs
                      font-medium
                      text-gray-400
                      backdrop-blur-md
                      sm:block
                      lg:bottom-10
                      lg:left-10
                    "
                  >
                    {project.category}
                  </div>
                </div>

                {/* Project Information */}
                <div className="flex flex-col justify-between p-7 sm:p-10">
                  <div>
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <span
                        className="
                          text-sm
                          font-medium
                          text-gray-600
                        "
                      >
                        {project.number}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.035]
                          px-3
                          py-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-gray-500
                        "
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className="
                        max-w-2xl
                        text-2xl
                        font-bold
                        tracking-tight
                        text-white
                        sm:text-3xl
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-2xl
                        text-sm
                        leading-7
                        text-gray-400
                        sm:text-base
                      "
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
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
                            font-medium
                            text-gray-400
                            transition-all
                            duration-200
                            hover:border-white/20
                            hover:bg-white/[0.05]
                            hover:text-white
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          bg-white
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          text-black
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:bg-gray-200
                        "
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-white/10
                          px-4
                          py-2.5
                          text-sm
                          font-medium
                          text-gray-300
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:border-white/20
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          ml-auto
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-white/10
                          text-gray-500
                          transition-all
                          duration-200
                          hover:border-white/20
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                        aria-label={`Open ${project.title} on GitHub`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-20">
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
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-8"
            >
              <div className="flex items-center gap-3">
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
                  More Projects
                </p>
              </div>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                More things I&apos;ve built.
              </h3>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <motion.article
                  key={project.number}
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
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    flex
                    h-full
                    flex-col
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
                  {/* Card Top */}
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-sm
                        font-medium
                        text-gray-600
                      "
                    >
                      {project.number}
                    </span>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-white/10
                          text-gray-500
                          transition-all
                          duration-200
                          hover:border-white/20
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                        aria-label={`Open ${project.title} on GitHub`}
                      >
                        <FaGithub size={15} />
                      </a>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="mt-8">
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-gray-600
                      "
                    >
                      {project.category}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-xl
                        font-semibold
                        tracking-tight
                        text-white
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-6
                        text-gray-500
                      "
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto pt-7">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-lg
                            border
                            border-white/10
                            bg-white/[0.02]
                            px-2.5
                            py-1
                            text-[11px]
                            font-medium
                            text-gray-500
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Learning Projects */}
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
          <div
            className="
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
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
                <Code2
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
                  Learning & Practice
                </p>

                <h3 className="mt-1 text-base font-semibold text-white">
                  10+ additional learning projects
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Smaller applications and experiments built while
                  learning new technologies.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/SaifwebDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                text-sm
                font-semibold
                text-gray-400
                transition-colors
                duration-200
                hover:text-white
              "
            >
              Explore GitHub

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </motion.div>

        {/* GitHub CTA */}
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
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mt-5
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-6
            sm:flex-row
            sm:p-8
          "
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              Want to see more?
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Explore my GitHub for more projects, experiments, and
              development work.
            </p>
          </div>

          <a
            href="https://github.com/SaifwebDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-lg
              border
              border-white/15
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-black
            "
          >
            <FaGithub size={16} />

            View GitHub

            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;