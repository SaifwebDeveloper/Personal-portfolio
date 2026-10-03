import { ArrowUp, Mail } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-[1fr_auto]">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              className="group inline-flex items-center gap-2"
            >
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]" >
      SAIF
    </span>
    <span className="ml-1.5 text-white tracking-widest">
      UR REHMAN
    </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Full-Stack Developer and AI enthusiast focused on building
              practical, scalable, and user-friendly digital experiences.
            </p>

            <a
              href="mailto:saifmsd855@gmai..com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              <Mail size={15} />
              saifmsd855@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              Navigation
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 text-gray-600 sm:flex-row sm:items-center sm:gap-4">
            <p>
              © {currentYear} Saif Ur Rehman. All rights reserved.
            </p>

            <span className="hidden text-white/10 sm:block">•</span>

          
          </div>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 text-gray-500 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;