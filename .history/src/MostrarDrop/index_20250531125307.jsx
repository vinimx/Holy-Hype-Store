import "./mostrarDrop.css";
import { useEffect, useState } from "react";

export default function MostrarDrop() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/banners")
      .then((res) => res.json())
      .then((data) => {
        setBanner(data[0]);
      });
  }, []);

  if (!banner) return null;

  return (
    <div className="mostrar-drop">
      <img src={banner.imagem.replace("/src", "")} alt={banner.alt} />
    </div>
  );
}
