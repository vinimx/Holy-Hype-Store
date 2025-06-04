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
    <div className="mostrar-drop">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
        whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
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
            style={{ borderRadius: "18px" }}
            whileHover={{ scale: 1.05 }}
          />
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
        whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {banner.imagem && (
          <motion.img
            src={banner.imagem}
            alt={banner.alt}
            style={{ borderRadius: "18px" }}
            whileHover={{ scale: 1.05 }}
          />
        )}
      </motion.div>
    </div>
  );
}
