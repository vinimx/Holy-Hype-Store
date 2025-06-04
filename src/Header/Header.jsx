import React from 'react';
import { motion } from 'framer-motion';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.h1 
              className="header-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Holy Hype Store
            </motion.h1>
            <motion.p 
              className="header-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Descubra produtos exclusivos e de alta qualidade para sua coleção.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="header-button">
                Explorar Produtos
              </button>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div 
              className="header-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/images/header-image.jpg" 
                alt="Holy Hype Store" 
                className="header-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 