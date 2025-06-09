import "./mostrarDrop.css";
import { motion } from "framer-motion";
import { banners } from "../data";

export default function MostrarDrop() {
  const banner = banners[0];

  if (!banner) return null;

  return (
    <motion.div 
      className="mostrar-drop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {banner.video && (
          <motion.video
            src={banner.video}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
            className="video-banner"
            alt={banner.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        )}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {banner.imagem && (
          <motion.img 
            src={banner.imagem} 
            alt={banner.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ 
              filter: "brightness(1.05)",
              transition: { duration: 0.15 }
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
