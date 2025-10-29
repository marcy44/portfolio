import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FullWidthNavbar = () => {
  const navLinks = ["Portfolio", "About", "Contact", "Work"];
  
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <motion.nav
      initial={{ y: "-120%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
      className="fixed top-0 w-full h-28 z-50 flex justify-between items-center px-8 md:px-12 bg-black shadow-2xl backdrop-blur-sm"
    >
      <motion.div 
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ 
          rotate: { duration: 0.6, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 300, damping: 15 }
        }}
        className="cursor-pointer"
      >
        <img
          src="/duck.jpg"
          alt="Logo"
          className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full border-2 border-[#A29B8E] hover:border-white transition-colors duration-300"
        />
      </motion.div>

      <ul className="hidden md:flex gap-12 lg:gap-16 text-[#f9f7f3] font-semibold text-xl lg:text-2xl">
        {navLinks.map((link, index) => (
          <motion.li
            key={link}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="relative cursor-pointer group"
          >
            <motion.span 
              whileHover={{ 
                scale: 1.1,
                letterSpacing: "0.05em"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              className="inline-block transition-colors duration-300 group-hover:text-white"
            >
              {link}
            </motion.span>
            <motion.span 
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-[#A29B8E] w-full origin-left"
            />
          </motion.li>
        ))}
      </ul>

      <ul className="flex gap-6 md:gap-10 text-white text-4xl md:text-5xl">
        {socialLinks.map(({ icon: Icon, url, label }) => (
          <motion.li 
            key={label}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={label}
              className="block hover:text-[#A29B8E] transition-colors duration-300"
            >
              <Icon />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default FullWidthNavbar;