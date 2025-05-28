import "./cardProdutos.css";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Produtos from "../Produtos";

export default function CardProdutos() {
  const [produtos, setProdutos] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { y: -5 },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const priceVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.1 },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Produtos
        onPrev={() => sliderRef.current.slickPrev()}
        onNext={() => sliderRef.current.slickNext()}
      />
      <div
        className="slider-container"
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem 0" }}
      >
        <Slider {...settings}>
          {produtos.map((produto) => (
            <motion.div
              key={produto.id}
              className="produto-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <div className="produto-imagem">
                <motion.img
                  src={produto.imagem}
                  alt={produto.alt}
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="produto-overlay"
                  variants={overlayVariants}
                  initial="hidden"
                  whileHover="hover"
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
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {produto.nome}
                </motion.h3>
                <motion.span
                  className="produto-preco"
                  variants={priceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {produto.preco}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}
