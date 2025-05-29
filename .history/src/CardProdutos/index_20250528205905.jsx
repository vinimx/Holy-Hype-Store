import "./cardProdutos.css";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Produtos from "../Produtos";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function CardProdutos({ titulo, produtos: produtosProp }) {
  const [produtos, setProdutos] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, [produtosProp]);

  const handleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
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

  // Framer Motion variants para fadeIn/scale leve
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
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
          {produtos.map((produto) => (
            <motion.div
              key={produto.id}
              className="produto-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button
                className={`wishlist-btn${
                  wishlist.includes(produto.id) ? " active" : ""
                }`}
                onClick={() => handleWishlist(produto.id)}
                aria-label="Adicionar aos favoritos"
                type="button"
              >
                {wishlist.includes(produto.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
              <div className="produto-imagem">
                <img
                  src={produto.imagem}
                  alt={produto.alt}
                  loading="lazy"
                />
              </div>
              <div className="produto-info">
                <div>
                  <div className="produto-nome">{produto.nome}</div>
                  <span className="produto-preco">{produto.preco}</span>
                </div>
                <button className="btn-comprar">Comprar</button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}
