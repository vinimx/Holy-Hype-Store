import "./mostrarDrop.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence mode="wait">
        <motion.div
          key={banner.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {banner.video && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <video
                src={banner.video}
                type="video/mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video-banner"
                alt={banner.alt}
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`img-${banner.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {banner.imagem && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={banner.imagem} alt={banner.alt} className="image-banner" />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
