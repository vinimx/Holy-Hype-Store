import "./mostrarDrop.css";
import { useEffect, useState } from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function MostrarDrop() {
  const [banner, setBanner] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/banners`)
      .then((res) => res.json())
      .then((data) => {
        const bannerVideo = data.find((b) => b.id === 2);
        setBanner(bannerVideo || data[0]);
      })
      .catch((error) => {
        console.error("Erro ao carregar banners:", error);
        setError(error);
      });
  }, []);

  if (error) return null;
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
            src={banner.video.startsWith("http") ? banner.video : `${API_URL}${banner.video}`}
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
            src={banner.imagem.startsWith("http") ? banner.imagem : `${API_URL}${banner.imagem}`}
            alt={banner.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{
              filter: "brightness(1.05)",
              transition: { duration: 0.15 },
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
