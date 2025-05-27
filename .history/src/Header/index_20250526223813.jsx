import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./header.css";

export default function Header() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="header-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="header-content" variants={itemVariants}>
        <motion.h1 
          className="header-title"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Holy Hype Store
        </motion.h1>
        <motion.p 
          className="header-subtitle"
          variants={itemVariants}
        >
          Descubra o estilo que combina com você
        </motion.p>
        <motion.div 
          className="header-cta"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ 
              boxShadow: "0 8px 20px rgba(178, 59, 59, 0.2)",
              y: -2
            }}
          >
            Explorar Coleção
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
