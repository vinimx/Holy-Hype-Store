import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <Container>
        <Row className="conteudo-rodape">
          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="logo-rodape">
                <img src="/imagens/logo.png" alt="Holy Hype Store" />
              </div>
              <p className="texto-rodape">
                Sua loja de roupas urbanas com estilo e qualidade
              </p>
            </motion.div>
          </Col>

          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="subtitulo-rodape">Contato</h4>
              <div className="info-contato">
                <p>
                  <MdEmail className="icone-contato" /> contato@holyhype.com
                </p>
                <p>
                  <MdPhone className="icone-contato" /> (11) 99999-9999
                </p>
                <p>
                  <MdLocationOn className="icone-contato" /> São Paulo, SP
                </p>
              </div>
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="subtitulo-rodape">Redes Sociais</h4>
              <div className="redes-sociais">
                <a href="#" className="link-rede-social">
                  <FaInstagram />
                </a>
                <a href="#" className="link-rede-social">
                  <FaFacebook />
                </a>
                <a href="#" className="link-rede-social">
                  <FaTwitter />
                </a>
                <a href="#" className="link-rede-social">
                  <FaTiktok />
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="rodape-inferior"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <p className="copyright">
                © 2024 Holy Hype Store. Todos os direitos reservados.
              </p>
              <p className="credito-desenvolvedor">
                Desenvolvido por Marcos Vinícius Marcolino Rocha
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Rodape;
