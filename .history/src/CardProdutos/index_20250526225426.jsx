import "./cardProdutos.css";
import { motion } from "framer-motion";

export default function CardProdutos() {
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { y: -6, boxShadow: "0 8px 32px 0 rgba(30,30,30,0.10)" },
  };

  const imageVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const priceVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.1 },
    },
  };

  return (
    <motion.div
      className="produto-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <motion.div
        className="produto-imagem"
        variants={imageVariants}
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.3 }}
      >
        <img src="/src/assets/yeshua.png" alt="Camiseta YESHUA" />
      </motion.div>
      <div className="produto-info">
        <motion.h3
          className="produto-nome"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Camiseta YESHUA
        </motion.h3>
        <motion.span
          className="produto-preco"
          variants={priceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          R$ 299,90
        </motion.span>
      </div>
    </motion.div>
  );
}
