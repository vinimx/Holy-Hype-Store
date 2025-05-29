import "./mostrarDrop.css";

export default function MostrarDrop({ src, alt }) {
  return (
    <div className="mostrar-drop">
      <img src={src} alt={alt} />
    </div>
  );
}

// Uso:
// <MostrarDrop src="/src/assets/new_drop.png" alt="Imagem das novas camisetas" />
