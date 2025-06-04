import "./footer.css";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="/imagens/logo-menu.png" alt="Holy Hype Store" className="footer-logo" />
          </motion.div>
          <p className="footer-description">
            Sua loja de roupas urbanas com estilo e qualidade.
          </p>
        </div>

        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#colecoes">Coleções</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>Email: contato@holyhype.com</li>
            <li>Telefone: (11) 9999-9999</li>
            <li>Endereço: São Paulo, SP</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Holy Hype Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
} 