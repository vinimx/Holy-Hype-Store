import "./header.css";
// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Header(videoSrc) {
  return (
    <header className="header">
      <video
        className="header-video"
        src={videoSrc.videoSrc}
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
          Holy Hype Store
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
