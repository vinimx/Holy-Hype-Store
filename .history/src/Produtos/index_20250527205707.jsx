import "./produtos.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Produtos({ onPrev, onNext }) {
  return (
    <div className="produtos">
      <h2>PRODUTOS</h2>
      <div className="produtos-slider">
        <button onClick={onPrev} className="slider-arrow">
          <FaChevronLeft />
        </button>
        <button onClick={onNext} className="slider-arrow">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
