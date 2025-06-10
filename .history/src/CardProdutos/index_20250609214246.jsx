import "./cardProdutos.css";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Produtos from "../Produtos";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCarrinho } from "../CarrinhoDeCompras";

export default function CardProdutos({ titulo, produtos: produtosProp }) {
  const { adicionarAoCarrinho, removerDoCarrinho, getQuantidade } =
    useCarrinho();
  const sliderRef = useRef();
  const [favoritos, setFavoritos] = useState({});

  const toggleFavorito = (produtoId) => {
    setFavoritos((prev) => ({
      ...prev,
      [produtoId]: !prev[produtoId],
    }));
  };

  const handleCarrinhoClick = (produto) => {
    if (getQuantidade(produto.id) > 0) {
      removerDoCarrinho(produto.id);
    } else {
      adicionarAoCarrinho(produto);
    }
    toggleFavorito(produto.id);
  };

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
          slidesToShow: 2,
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

  const heartVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.2, 1] },
    hover: { scale: 1.1 },
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
          {produtosProp.map((produto) => (
            <motion.div
              key={produto.id}
              className="produto-card card shadow-sm rounded-4 border-0 d-flex flex-column align-items-stretch gap-3"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              viewport={{ once: true }}
            >
              <motion.button
                className={`btn btn-light rounded-circle position-absolute top-0 end-0 m-2 border ${
                  favoritos[produto.id] ? "favorito" : ""
                }`}
                aria-label="Adicionar aos favoritos"
                type="button"
                tabIndex={0}
                onClick={() => handleCarrinhoClick(produto)}
                variants={heartVariants}
                initial="initial"
                animate={favoritos[produto.id] ? "animate" : "initial"}
                whileHover="hover"
              >
                {favoritos[produto.id] ? (
                  <FaHeart size={40} className="text-danger" />
                ) : (
                  <FaRegHeart size={40} />
                )}
                {getQuantidade(produto.id) > 0 && (
                  <span>{getQuantidade(produto.id)}</span>
                )}
              </motion.button>
              <div className="produto-imagem bg-light d-flex align-items-center justify-content-center rounded-3 mb-2">
                <img
                  src={produto.imagem}
                  alt={produto.alt}
                  loading="lazy"
                  className="img-fluid"
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
                <button className="btn btn-comprar" type="button">
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
