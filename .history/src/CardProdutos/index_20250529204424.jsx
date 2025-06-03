import "./cardProdutos.css";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Produtos from "../Produtos";
import { FaRegHeart } from "react-icons/fa";

export default function CardProdutos({ titulo, produtos: produtosProp }) {
  const [produtos, setProdutos] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, [produtosProp]);

  const settings = {
    dots: false,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    whileHover: {
      boxShadow: "0 8px 32px rgba(30,30,30,0.10)",
      scale: 1.025,
      transition: { duration: 0.18 },
    },
  };

  return (
    <>
      <Produtos
        titulo={titulo || "Produtos"}
        onPrev={() => sliderRef.current.slickPrev()}
        onNext={() => sliderRef.current.slickNext()}
      />
      <div className="slider-container">
        <Slider {...settings}>
          {produtos.map((produto, secao) => (
            <motion.div
              key={produto.id}
              className="produto-card card shadow-sm rounded-4 border-0 d-flex flex-column align-items-stretch gap-3"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              viewport={{ once: true }}
            >
              <button
                className="btn btn-light rounded-circle p-2 position-absolute top-0 end-0 m-2 border"
                aria-label="Adicionar aos favoritos"
                type="button"
                tabIndex={0}
              >
                <FaRegHeart size={20} />
              </button>
              <div className="produto-imagem bg-light d-flex align-items-center justify-content-center rounded-3 mb-2">
                <img
                  src={produto.imagem}
                  alt={produto.alt}
                  loading="lazy"
                  className="img-fluid"
                  style={{ maxHeight: 160, objectFit: "contain" }}
                />
              </div>
              <div className="produto-info d-flex flex-column gap-2">
                <div>
                  <div className="produto-nome fw-semibold text-dark">
                    {produto.nome}
                  </div>
                  <span className="produto-preco fw-bold text-warning">
                    {produto.preco}
                  </span>
                </div>
                <button
                  className="btn btn-dark w-100 rounded-3 btn-comprar"
                  type="button"
                >
                  Comprar
                </button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}
