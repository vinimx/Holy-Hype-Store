import "./header.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="header-title">
                Holy Hype Store
              </h1>
              <p className="header-subtitle">
                Sua loja de roupas urbanas com estilo e qualidade
              </p>
              <motion.button
                className="header-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Coleção
              </motion.button>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="header-image-container"
            >
              <img
                src="/imagens/header-image.jpg"
                alt="Holy Hype Store"
                className="header-image"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </header>
  );
} 