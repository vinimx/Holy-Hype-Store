import "./header.css";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { videos } from "../data";

export default function Header() {
  const headerVideo = videos.find((v) => v.id === 1);

  return (
    <header className="header">
      {headerVideo?.video && (
        <video
          className="header-video"
          src={headerVideo.video}
          type="video/mp4"
          autoPlay
          loop
          muted
        ></video>
      )}
      <div className="header-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          {headerVideo?.titulo}
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
