import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./cardProdutos.css";

export default function CardProdutos({ produto }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(178, 59, 59, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      ref={ref}
      className="card-produto"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="card-imagem-container"
        variants={imageVariants}
        whileHover="hover"
      >
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          className="card-imagem"
        />
        <motion.div 
          className="card-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            className="card-button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Ver Detalhes
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="card-info">
        <motion.h3 
          className="card-titulo"
          whileHover={{ color: "var(--vermelho-tijolo)" }}
        >
          {produto.nome}
        </motion.h3>
        <motion.p 
          className="card-preco"
          whileHover={{ scale: 1.05 }}
        >
          R$ {produto.preco.toFixed(2)}
        </motion.p>
        <motion.div 
          className="card-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {produto.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="card-tag"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "var(--bege-urbano)"
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
