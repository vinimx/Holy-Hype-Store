import "./mostrarDrop.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MostrarDrop() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/banners")
      .then((res) => res.json())
      .then((data) => {
        const bannerVideo = data.find((b) => b.id === 2);
        setBanner(bannerVideo || data[0]);
      });
  }, []);

  if (!banner) return null;

  return (
    <motion.div 
      className="mostrar-drop"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
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
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        )}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {banner.imagem && (
          <motion.img 
            src={banner.imagem} 
            alt={banner.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ 
              filter: "brightness(1.1)",
              transition: { duration: 0.3 }
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
