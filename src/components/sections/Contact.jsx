import { motion } from "framer-motion";

import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "saifmsd855@gmail.com",
    href: "mailto:saifmsd855@gmail.com",
    icon: Mail,
    iconClass: "text-gray-300",
  },
  {
    label: "GitHub",
    value: "github.com/SaifwebDeveloper",
    href: "https://github.com/SaifwebDeveloper",
    icon: FaGithub,
    iconClass: "text-white",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saif-ur-rehman",
    href: "https://www.linkedin.com/in/saif-ur-rehman-871b26360",
    icon: FaLinkedinIn,
    iconClass: "text-blue-400",
  },
  {
    label: "WhatsApp",
    value: "+92 346 8860855",
    href: "https://wa.me/923468860855",
    icon: FaWhatsapp,
    iconClass: "text-green-400",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#020617] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Have a project, opportunity, or idea you want to discuss? Feel
            free to reach out. I&apos;m open to software development
            opportunities, internships, freelance work, and collaborative
            projects.
          </p>
        </motion.div>

        {/* Main Contact Area */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:p-10"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.035] blur-3xl" />

            <div className="relative">

              {/* Message Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <MessageCircle
                  size={21}
                  strokeWidth={1.6}
                  className="text-gray-300"
                />
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                Start a conversation
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Whether you&apos;re looking for a full-stack developer,
                discussing an AI project, or simply want to connect, I&apos;d
                be happy to hear from you.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">

                {/* Email */}
                <a
                  href="mailto:saifmsd855@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-gray-200"
                >
                  <Mail size={16} />
                  Send an Email
                </a>

                {/* CV */}
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  Download CV
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Availability */}
              <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-7">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                </span>

                <div>
                  <p className="text-sm font-medium text-white">
                    Available for opportunities
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Open to full-time, internship, freelance, and remote work.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-10"
          >

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin
                size={19}
                className="text-gray-500"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  Based in Pakistan
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Available for remote opportunities
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="mt-8 space-y-3">

              {contactLinks.map((link) => {
                const Icon = link.icon;
                const isEmail = link.href.startsWith("mailto:");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.04]"
                  >

                    {/* Icon */}
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
                        transition-all
                        duration-200
                        group-hover:border-white/20
                        group-hover:bg-white/[0.06]
                      "
                    >
                      <Icon
                        size={18}
                        className={`${link.iconClass} transition-transform duration-200 group-hover:scale-110`}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-600">
                        {link.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-gray-400 transition-colors group-hover:text-white">
                        {link.value}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={16}
                      className="
                        shrink-0
                        text-gray-600
                        transition-transform
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-white
                      "
                    />
                  </a>
                );
              })}
            </div>

            {/* Quick Info */}
            <div className="mt-8 border-t border-white/10 pt-7">
              <div className="grid grid-cols-2 gap-5">

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Focus
                  </p>

                  <p className="mt-2 text-sm text-gray-300">
                    Full-Stack Development
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Interests
                  </p>

                  <p className="mt-2 text-sm text-gray-300">
                    AI &amp; Web Technologies
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between"
        >

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-gray-400"
            />

            <p className="text-sm text-gray-400">
              Open to meaningful technical opportunities and collaborations.
            </p>
          </div>

          <a
            href="mailto:saifmsd855@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gray-400"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </a>

        </motion.div>
      </div>
    </section>
  );
}

export default Contact;