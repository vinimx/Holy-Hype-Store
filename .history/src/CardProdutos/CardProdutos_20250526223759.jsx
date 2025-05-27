import React from 'react';
import { motion } from 'framer-motion';
import './cardProdutos.css';

const CardProdutos = ({ produto }) => {
  const {
    imagem,
    titulo,
    preco,
    tags = [],
    onComprar
  } = produto;

  return (
    <motion.div
      className="card-produto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="card-imagem-container">
        <motion.img
          src={imagem}
          alt={titulo}
          className="card-imagem"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="card-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="card-button"
            onClick={onComprar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comprar Agora
          </motion.button>
        </motion.div>
      </div>

      <div className="card-info">
        <motion.h3
          className="card-titulo"
          whileHover={{ color: 'var(--vermelho-tijolo)' }}
        >
          {titulo}
        </motion.h3>
        
        <motion.p
          className="card-preco"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          R$ {preco.toFixed(2)}
        </motion.p>

        <div className="card-tags">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="card-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{
                backgroundColor: 'var(--vermelho-tijolo)',
                color: 'var(--branco-puro)'
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CardProdutos; 