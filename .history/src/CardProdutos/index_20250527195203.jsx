import "./cardProdutos.css";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CardProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { y: -5 },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const priceVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.1 },
    },
  };

  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {produtos.map((produto) => (
    <motion.div
      key={produtos.id}
      className="produto-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="produto-imagem">
        <motion.img
          src="/src/assets/yeshua.png"
          alt="Camiseta YESHUA"
          variants={imageVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="produto-overlay"
          variants={overlayVariants}
          initial="hidden"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="btn-comprar"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comprar
          </motion.button>
        </motion.div>
      </div>
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
          R$ 000,00
        </motion.span>
      </div>
    </motion.div>
    </div>
  );
}
