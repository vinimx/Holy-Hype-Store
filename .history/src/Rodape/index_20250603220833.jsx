import "./rodape.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer py-5 mt-5">
      <Container>
        <Row className="g-4">
          {/* Logo e Descrição */}
          <Col lg={4} md={6}>
            <div className="footer-brand mb-4">
              <img 
                src="/imagens/logo-menu.png" 
                alt="Holy Hype Store" 
                className="footer-logo"
              />
            </div>
            <p className="text-muted">
              Sua loja de roupas urbanas com estilo e qualidade.
            </p>
          </Col>

          {/* Links Rápidos */}
          <Col lg={2} md={6}>
            <h5 className="mb-4">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#produtos" className="text-decoration-none">Produtos</a></li>
              <li className="mb-2"><a href="#colecoes" className="text-decoration-none">Coleções</a></li>
              <li className="mb-2"><a href="#sobre" className="text-decoration-none">Sobre Nós</a></li>
            </ul>
          </Col>

          {/* Contato */}
          <Col lg={3} md={6}>
            <h5 className="mb-4">Contato</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Email: contato@holyhype.com</li>
              <li className="mb-2">Telefone: (11) 9999-9999</li>
              <li className="mb-2">Endereço: São Paulo, SP</li>
            </ul>
          </Col>

          {/* Redes Sociais */}
          <Col lg={3} md={6}>
            <h5 className="mb-4">Redes Sociais</h5>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="social-icon">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="social-icon">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter size={24} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-5">
          <Col>
            <div className="footer-bottom text-center py-3 border-top">
              <p className="mb-0">&copy; 2024 Holy Hype Store. Todos os direitos reservados.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
} 