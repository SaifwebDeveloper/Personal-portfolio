import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Code2,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "NRTC",
    location: "Pakistan",
    period: "Jun 2026 - Jul 2026",
    type: "Internship",
    description:
      "Worked on software development for a PBX and VoIP environment, contributing to both frontend and backend systems.",
    responsibilities: [
      "Developed and maintained frontend functionality using JavaScript.",
      "Worked with Python for backend development and system functionality.",
      "Worked with Asterisk PBX for VoIP communication systems.",
      "Configured and worked with PJSIP and SIP endpoints.",
      "Worked with extensions.conf for Asterisk dial-plan configuration.",
      "Applied networking concepts including TCP, UDP, TLS, and SIP.",
    ],
    technologies: [
      "JavaScript",
      "Python",
      "Asterisk",
      "PJSIP",
      "SIP",
      "Linux",
    ],
  },
  {
    role: "MERN Stack Trainee",
    company: "Merge Area Digital & Connect Program",
    location: "Khyber Pakhtunkhwa",
    period: "Mar 2025 - May 2025",
    type: "Training Program",
    description:
      "Completed practical training focused on full-stack JavaScript development and modern web application technologies.",
    responsibilities: [
      "Developed frontend interfaces using React.",
      "Worked with Node.js and Express.js for backend development.",
      "Built and consumed REST APIs.",
      "Worked with MongoDB and application data management.",
      "Practiced Git and GitHub based development workflows.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Git",
    ],
  },
  {
    role: "IT Intern",
    company: "Pakistan Ordnance Factories (POF)",
    location: "Wah Cantt, Pakistan",
    period: "6 Weeks",
    type: "Internship",
    description:
      "Completed an internship in the IT department, gaining practical exposure to professional IT environments and systems.",
    responsibilities: [
      "Gained practical experience in an organizational IT environment.",
      "Worked with computer systems and basic IT operations.",
      "Observed professional software and technology workflows.",
      "Applied academic computer science knowledge in a practical environment.",
    ],
    technologies: [
      "IT Support",
      "Networking",
      "Computer Systems",
      "Troubleshooting",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Mawakay",
    location: "Remote",
    period: "1 Month",
    type: "Internship",
    description:
      "Completed a remote web development internship focused on building a strong foundation in modern HTML and CSS.",
    responsibilities: [
      "Developed responsive web page layouts.",
      "Practiced semantic HTML structure.",
      "Worked with CSS styling and responsive design.",
      "Improved frontend development fundamentals through practical tasks.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Responsive Design",
      "Frontend Development",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
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
      {/* Background Glows */}
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
              Experience
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
            Experience that
            <span className="block text-gray-500">
              shaped how I build.
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
            Practical experience across software development, full-stack
            web technologies, IT systems, networking, and VoIP
            environments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div
            className="
              absolute
              left-[15px]
              top-4
              hidden
              h-[calc(100%-32px)]
              w-px
              bg-gradient-to-b
              from-white/20
              via-white/10
              to-transparent
              md:block
            "
          />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative md:pl-14"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08 + 0.2,
                  }}
                  className="
                    absolute
                    left-[9px]
                    top-8
                    hidden
                    h-3.5
                    w-3.5
                    rounded-full
                    border-2
                    border-[#020617]
                    bg-white
                    shadow-[0_0_0_4px_rgba(255,255,255,0.05)]
                    md:block
                  "
                />

                {/* Experience Card */}
                <motion.div
                  whileHover={{
                    y: -3,
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
                    sm:p-7
                  "
                >
                  {/* Card Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-48
                      w-48
                      rounded-full
                      bg-white/[0.025]
                      blur-3xl
                    "
                  />

                  <div className="relative">
                    {/* Header */}
                    <div
                      className="
                        flex
                        flex-col
                        gap-5
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                      "
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3
                            className="
                              text-xl
                              font-semibold
                              tracking-tight
                              text-white
                            "
                          >
                            {experience.role}
                          </h3>

                          <span
                            className="
                              rounded-full
                              border
                              border-white/10
                              bg-white/[0.035]
                              px-2.5
                              py-1
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[0.12em]
                              text-gray-500
                            "
                          >
                            {experience.type}
                          </span>
                        </div>

                        {/* Company + Date */}
                        <div
                          className="
                            mt-3
                            flex
                            flex-wrap
                            items-center
                            gap-x-5
                            gap-y-2
                            text-sm
                            text-gray-500
                          "
                        >
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-2
                            "
                          >
                            <Building2 size={15} />
                            {experience.company}
                          </span>

                          <span
                            className="
                              inline-flex
                              items-center
                              gap-2
                            "
                          >
                            <CalendarDays size={15} />
                            {experience.period}
                          </span>
                        </div>
                      </div>

                      {/* Location */}
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-xs
                          text-gray-600
                        "
                      >
                        <MapPin size={14} />
                        {experience.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="
                        mt-6
                        max-w-3xl
                        text-sm
                        leading-6
                        text-gray-400
                      "
                    >
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-7">
                      <p
                        className="
                          mb-4
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-gray-600
                        "
                      >
                        Responsibilities
                      </p>

                      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {experience.responsibilities.map((item) => (
                          <div
                            key={item}
                            className="
                              flex
                              gap-3
                              text-sm
                              leading-6
                              text-gray-500
                            "
                          >
                            <span
                              className="
                                mt-[9px]
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-gray-600
                                transition-colors
                                duration-200
                                group-hover:bg-gray-400
                              "
                            />

                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div
                      className="
                        mt-7
                        border-t
                        border-white/5
                        pt-5
                      "
                    >
                      <p
                        className="
                          mb-3
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-gray-600
                        "
                      >
                        Technologies
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
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
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
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
            mt-12
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/[0.015]
            p-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-7
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
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
                size={19}
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
                Always Learning
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Continuously learning, building, and improving.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="
              group
              inline-flex
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
            View projects

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
        </motion.div>

        {/* Experience Summary */}
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
            grid
            gap-4
            sm:grid-cols-3
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.015]
              p-6
            "
          >
            <p
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
              "
            >
              4+
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Internships & Programs
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.015]
              p-6
            "
          >
            <p
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Full-Stack
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Software Development
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.015]
              p-6
            "
          >
            <p
              className="
                text-2xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Web · AI · IT
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Areas of Experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;