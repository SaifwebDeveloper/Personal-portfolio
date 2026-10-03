import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923468860855"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact me on WhatsApp"
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.1,
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-green-400/30
        bg-[#020617]/90
        text-green-400
        shadow-xl
        shadow-green-500/10
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-green-400/60
        hover:bg-green-400/10
        hover:text-green-300
      "
    >
      <FaWhatsapp
        size={27}
        className="relative z-10"
      />

      {/* Pulse Ring */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          border
          border-green-400/40
          animate-ping
        "
      />
    </motion.a>
  );
}

export default WhatsAppButton;