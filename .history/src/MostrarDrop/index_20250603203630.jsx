import "./mostrarDrop.css";
import { useEffect, useState } from "react";

export default function MostrarDrop() {
  const [videoBanner, setVideoBanner] = useState("");
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
      {banner.video ? (
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
