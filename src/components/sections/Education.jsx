import { motion } from "framer-motion";

import {
  Award,
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";

function Education() {
  const academicAreas = [
    "Programming",
    "Data Structures & Algorithms",
    "Database Systems",
    "Computer Networks",
    "Software Engineering",
    "Web Development",
    "Artificial Intelligence",
    "Cyber Security",
  ];

  return (
    <section
      id="education"
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
          top-[15%]
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
          right-[-180px]
          bottom-[10%]
          h-[400px]
          w-[400px]
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
              Education
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
            Academic
            <span className="block text-gray-500">
              foundation.
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
            My academic background in computer science and the
            technical foundation behind my software development work.
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            transition-all
            duration-300
            hover:border-white/15
          "
        >
          <div className="grid lg:grid-cols-[1fr_0.34fr]">
            {/* Main Education Information */}
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.035]
                  "
                >
                  <GraduationCap
                    size={26}
                    strokeWidth={1.6}
                    className="text-gray-300"
                  />
                </div>

                {/* Degree */}
                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-gray-600
                    "
                  >
                    Bachelor&apos;s Degree
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      tracking-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    Bachelor of Science in Computer Science
                  </h3>

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
                    <span className="inline-flex items-center gap-2">
                      <BookOpen size={14} />
                      Gomal University
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} />
                      Dera Ismail Khan, Pakistan
                    </span>
                  </div>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-3
                    "
                  >
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
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
                      <CalendarDays size={13} />
                      Computer Science
                    </span>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
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
                      <BookOpen size={13} />
                      Full-Stack Development
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-9 border-t border-white/10 pt-7">
                <p
                  className="
                    max-w-3xl
                    text-sm
                    leading-7
                    text-gray-400
                    sm:text-base
                  "
                >
                  Completed a Bachelor&apos;s degree in Computer Science
                  with a strong focus on programming, software
                  engineering, databases, computer networks, web
                  development, artificial intelligence, and modern
                  full-stack application development.
                </p>
              </div>
            </div>

            {/* Academic Performance */}
            <div
              className="
                border-t
                border-white/10
                bg-white/[0.02]
                p-7
                sm:p-10
                lg:border-l
                lg:border-t-0
                lg:p-12
              "
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-gray-600
                    "
                  >
                    <Award size={14} />
                    Academic Performance
                  </div>

                  <div className="mt-6">
                    <p
                      className="
                        text-4xl
                        font-bold
                        tracking-tight
                        text-white
                        sm:text-5xl
                      "
                    >
                      3.86
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      out of 4.00 CGPA
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  <div className="border-t border-white/10 pt-5">
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-gray-600
                      "
                    >
                      Degree
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      BS Computer Science
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-gray-600
                      "
                    >
                      University
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      Gomal University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Areas */}
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
          className="mt-5"
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-between
              gap-4
            "
          >
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
                Core Areas
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
                Technical foundation
              </h3>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {academicAreas.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -2,
                }}
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  px-5
                  py-4
                  text-sm
                  font-medium
                  text-gray-400
                  transition-all
                  duration-200
                  hover:border-white/20
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/30
                    "
                  />

                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Academic Note */}
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
            rounded-2xl
            border
            border-white/10
            bg-white/[0.015]
            p-6
            sm:p-7
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                bg-white/[0.035]
              "
            >
              <BookOpen
                size={17}
                strokeWidth={1.6}
                className="text-gray-400"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                From fundamentals to real-world development
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                My academic foundation has supported practical work
                across full-stack development, AI-integrated systems,
                databases, networking, and software engineering.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;