import "./header.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [videoSrc, setVideoSrc] = useState("");
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/videos")
      .then((res) => res.json())
      .then((videos) => {
        const headerVideo = videos.find((v) => v.id === 1);
        setVideoSrc(headerVideo ? headerVideo.video : "");
        setTitulo(headerVideo ? headerVideo.titulo : "");
      });
  }, []);

  return (
    <header className="header">
      <video
        className="header-video"
        src={videoSrc}
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="header-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          {titulo}
        </motion.h1>
        <motion.a
          href="#"
          className="header-link"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p>Nova coleção</p>
        </motion.a>
      </div>
    </header>
  );
}
