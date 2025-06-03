import "./mostrarDrop.css";
import { useEffect, useState } from "react";

export default function MostrarDrop() {
  const [banner, setBanner] = useState(null);
  const [videoBanner, setvideoBanner] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/banners")
      .then((res) => res.json())
      .then((data) => {
        setBanner(data[0]);
        setvideoBanner(data[0].video);
      });
  }, []);

  if (!banner) return null;

  return (
    <div className="mostrar-drop">
      <img src={banner.imagem} alt={banner.alt} />
    </div>
    <div className="video-banner"></div>
  );
}
