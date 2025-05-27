import "./cardProdutos.css";
import { motion } from "framer-motion";

export default function CardProdutos() {
  return (
    <motion.div
      className="produto-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ boxShadow: "0 8px 32px 0 rgba(30,30,30,0.13)", y: -4 }}
    >
      <motion.div
        className="produto-imagem"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        <img
          src="/src/assets/yeshua.png"
          alt="Camiseta YESHUA"
        />
      </motion.div>
      <div className="produto-info">
        <h3 className="produto-nome">Camiseta YESHUA</h3>
        <span className="produto-preco">R$ 299,90</span>
      </div>
    </motion.div>
  );
}
