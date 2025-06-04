import "./mostrarDrop.css";
import { useEffect, useState } from "react";

export default function MostrarDrop() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/banners")
      .then((res) => res.json())
      .then((data) => setBanner(data[0]));
      .then((videos) => {
        const bannerVideo = videos.find((v) => v.id === 2);
        setBanner(bannerVideo ? bannerVideo : null);
      }
  }, []);

  if (!banner) return null;

  return (
    <div className="mostrar-drop">
      {banner.video ? (
        <video
          src={banner.video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-banner"
          alt={banner.alt}
        />
      ) : (
        <img src={banner.imagem} alt={banner.alt} />
      )}
    </div>
  );
}
