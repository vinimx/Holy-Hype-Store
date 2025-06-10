import "./menu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCarrinho } from "../CarrinhoDeCompras";

export default function Menu() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { carrinho } = useCarrinho();
  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={menuVariants}
    >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Navbar.Brand href="#">
              <img src="/imagens/logo-menu.png" alt="Holy Hype Store" />
            </Navbar.Brand>
          </motion.div>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* Home */}
              <motion.div key="Home" custom={0} variants={itemVariants}>
                <Nav.Link href="#home">Home</Nav.Link>
              </motion.div>

              {/* Produtos */}
              <motion.div key="Produtos" custom={1} variants={itemVariants}>
                <Nav.Link href="#produtos">Produtos</Nav.Link>
              </motion.div>

              {/* Coleções */}
              <motion.div key="Coleções" custom={2} variants={itemVariants}>
                <NavDropdown title="Coleções" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Categoria</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Novidades</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Promoções</NavDropdown.Item>
                </NavDropdown>
              </motion.div>

              {/* Sobre Nós */}
              <motion.div key="Sobre Nós" custom={3} variants={itemVariants}>
                <Nav.Link href="#sobre nós">Sobre Nós</Nav.Link>
              </motion.div>
            </Nav>
          </Navbar.Collapse>

          <div className="menu-icons d-none d-lg-flex">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="position-relative"
            >
              <CiShoppingCart />
              {totalItens > 0 && (
                <span className="badge bg-danger position-absolute top-0  translate-middle">
                  {totalItens}
                </span>
              )}
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <CiUser />
            </motion.div>
          </div>

          <div className="menu-icons d-flex d-lg-none">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="position-relative"
            >
              <CiShoppingCart />
              {totalItens > 0 && (
                <span className="badge bg-danger position-absolute top-0 translate-middle">
                  {totalItens}
                </span>
              )}
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <CiUser />
            </motion.div>
          </div>
        </Container>
      </Navbar>
    </motion.div>
  );
}
