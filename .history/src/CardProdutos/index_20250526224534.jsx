import "./cardProdutos.css";
import { motion } from "framer-motion";

export default function CardProdutos() {
  return (
    <motion.div 
      className="produto-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <div className="produto-imagem">
        <motion.img 
          src="/src/assets/yeshua.png" 
          alt="Nome do Produto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="produto-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
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
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Camiseta YESHUA
        </motion.h3>
        <motion.span 
          className="produto-preco"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          R$ 299,90
        </motion.span>
      </div>
    </motion.div>
  );
}
