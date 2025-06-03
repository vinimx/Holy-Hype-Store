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
  return (
    <div className="mostrar-drop">
      {banner && banner.video ? (
        <video
          src={banner.video}
          autoPlay
          loop
          muted
          playsInline
          className="video-banner"
        />
      ) : (
        <img src={banner.imagem} alt={banner.alt} />
      )}
    </div>
  );
}
