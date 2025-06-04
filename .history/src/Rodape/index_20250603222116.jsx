import React from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="conteudo-rodape">
        <div className="secao-rodape">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Holy Hype Store
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sua loja de roupas urbanas com estilo e qualidade
          </motion.p>
        </div>

        <div className="secao-rodape">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Contato
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Email: contato@holyhype.com
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Tel: (11) 99999-9999
          </motion.p>
        </div>

        <div className="secao-rodape">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Redes Sociais
          </motion.h4>
          <motion.div
            className="links-sociais"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#" className="link-social">
              Instagram
            </a>
            <a href="#" className="link-social">
              Facebook
            </a>
            <a href="#" className="link-social">
              Twitter
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="rodape-inferior"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>© 2024 Holy Hype Store. Todos os direitos reservados.</p>
        <p className="credito-desenvolvedor">
          Desenvolvido por Marcos Vinícius Marcolino Rocha
        </p>
      </motion.div>
    </footer>
  );
};

export default Rodape;
