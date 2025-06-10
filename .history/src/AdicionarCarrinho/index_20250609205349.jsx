import { useState, useRef } from "react";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function CardProdutos({ titulo, produtos: produtosProp }) {
  const [favoritos, setFavoritos] = useState([]);
  const sliderRef = useRef();

  function handleFavoritar(produto) {
    setFavoritos((prev) => [...prev, produto]);
    // Se quiser evitar duplicados:
    // setFavoritos((prev) => prev.find(p => p.id === produto.id) ? prev : [...prev, produto]);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2>{titulo}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {produtosProp.map((produto) => (
            <motion.div key={produto.id}>
              <button
                className="btn btn-light rounded-circle p-2 position-absolute top-0 end-0 m-2 border"
                aria-label="Adicionar aos favoritos"
                type="button"
                tabIndex={0}
                onClick={() => handleFavoritar(produto)}
              >
                <FaRegHeart size={20} />
              </button>
              {/* ...restante do card... */}
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}
