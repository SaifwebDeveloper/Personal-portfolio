import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    title: "Python for Everybody",
    issuer: "University of Michigan · Coursera",
    category: "Python",
    description:
      "A comprehensive Python specialization covering programming fundamentals, data structures, APIs, databases, and practical Python development.",
    link: "https://www.coursera.org/account/accomplishments/specialization/5HYKJYQJ4BV6",
    featured: true,
  },

  {
    title: "Google IT Support",
    issuer: "Google · Coursera",
    category: "IT Support",
    description:
      "Professional training covering technical support, troubleshooting, networking, operating systems, system administration, and IT fundamentals.",
    link: "https://www.coursera.org/account/accomplishments/specialization/ANPHQBFRECJT",
    featured: true,
  },

  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Coursera",
    category: "Web Development",
    description:
      "Web development training focused on HTML, CSS, JavaScript, responsive interfaces, and building modern web applications.",
    link: "https://www.coursera.org/account/accomplishments/verify/MQ4VYU3BSDQM",
    featured: true,
  },

  {
    title: "Google Data Analytics",
    issuer: "Google",
    category: "Data Analytics",
    description:
      "Professional training focused on data analysis, data preparation, visualization, and analytical problem-solving.",
    link: "",
    featured: false,
  },

  {
    title: "Google Cybersecurity",
    issuer: "Google",
    category: "Cybersecurity",
    description:
      "Professional cybersecurity training covering security fundamentals, risk management, networks, Linux, and security practices.",
    link: "",
    featured: false,
  },

  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Professional Certificate",
    category: "AI",
    description:
      "Training focused on effective prompt design, AI-assisted workflows, and practical use of large language models.",
    link: "",
    featured: false,
  },

  {
    title: "Microsoft Excel",
    issuer: "Microsoft",
    category: "Productivity",
    description:
      "Training focused on spreadsheet management, formulas, data organization, and practical Excel workflows.",
    link: "",
    featured: false,
  },

  {
    title: "Microsoft 365 Fundamentals",
    issuer: "Microsoft",
    category: "Cloud & Productivity",
    description:
      "Fundamentals of Microsoft 365 services, cloud-based productivity, collaboration, and digital workplace tools.",
    link: "",
    featured: false,
  },

  {
    title: "Huawei Certification",
    issuer: "Huawei",
    category: "Technology",
    description:
      "Technical learning and certification focused on modern information and communication technology concepts.",
    link: "",
    featured: false,
  },

  {
    title: "CyberSecure Pakistan",
    issuer: "CyberSecure Pakistan",
    category: "Cybersecurity",
    description:
      "Cybersecurity-focused learning covering security awareness and practical cybersecurity concepts.",
    link: "",
    featured: false,
  },

  {
    title: "DevSecOps Engineer",
    issuer: "Professional Certification",
    category: "DevSecOps",
    description:
      "Training focused on integrating security practices into modern software development and delivery workflows.",
    link: "",
    featured: false,
  },
];

function Certifications() {
  const featuredCertifications = certifications.filter(
    (certificate) => certificate.featured
  );

  const otherCertifications = certifications.filter(
    (certificate) => !certificate.featured
  );

  return (
    <section
      id="certifications"
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
              Certifications
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
            Continuous learning,
            <span className="block text-gray-500">
              practical skills.
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
            Professional certifications and technical learning across
            software development, Python, IT support, data analytics,
            cybersecurity, AI, and modern web technologies.
          </p>
        </motion.div>

        {/* Featured Certifications */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {featuredCertifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                p-7
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.04]
              "
            >
              {/* Decorative Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-40px]
                  top-[-40px]
                  h-32
                  w-32
                  rounded-full
                  bg-white/[0.025]
                  blur-3xl
                  transition-all
                  duration-300
                  group-hover:bg-white/[0.04]
                "
              />

              <div className="relative flex h-full flex-col">
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
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
                      bg-white/[0.04]
                    "
                  >
                    <Award
                      size={22}
                      strokeWidth={1.5}
                      className="text-gray-300"
                    />
                  </div>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.02]
                      px-3
                      py-1
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-gray-500
                    "
                  >
                    {certificate.category}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="
                    mt-7
                    text-xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-500">
                  {certificate.issuer}
                </p>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-6
                    text-gray-400
                  "
                >
                  {certificate.description}
                </p>

                {/* Bottom */}
                <div className="mt-auto pt-7">
                  <div
                    className="
                      mb-5
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-gray-500
                    "
                  >
                    <BadgeCheck size={15} />
                    Verified Certificate
                  </div>

                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-gray-300
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:border-white/20
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      <ExternalLink size={15} />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Additional Certifications */}
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
                Additional Certifications
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
              More technical learning.
            </h3>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherCertifications.map((certificate, index) => (
              <motion.article
                key={certificate.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.04]
                "
              >
                <div className="flex items-center justify-between gap-4">
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
                      bg-white/[0.03]
                    "
                  >
                    <Award
                      size={18}
                      strokeWidth={1.5}
                      className="text-gray-400"
                    />
                  </div>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-gray-600
                    "
                  >
                    {certificate.category}
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    text-base
                    font-semibold
                    text-white
                  "
                >
                  {certificate.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  {certificate.issuer}
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-gray-500
                  "
                >
                  {certificate.description}
                </p>

                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-auto
                      inline-flex
                      items-center
                      gap-2
                      pt-5
                      text-xs
                      font-semibold
                      text-gray-500
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    View Certificate
                    <ExternalLink size={13} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        {/* Learning Statement */}
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
            mt-20
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            p-7
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-8
          "
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              Always learning. Always building.
            </h3>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-gray-500
              "
            >
              I continue expanding my technical knowledge through
              hands-on projects, professional training, and emerging
              technologies.
            </p>
          </div>

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
              bg-white/[0.03]
            "
          >
            <ArrowUpRight
              size={20}
              className="text-gray-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;