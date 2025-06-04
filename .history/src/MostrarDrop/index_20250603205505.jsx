import "./mostrarDrop.css";
import { useEffect, useState } from "react";

export default function MostrarDrop() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/banners")
      .then((res) => res.json())
      .then((data) => {
        const bannerVideo = data.find((b) => b.id === 2);
        setBanner(bannerVideo || data[0]);
      });
  }, []);

  if (!banner) return null;

  return (
    <div className="mostrar-drop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      {banner.video && (
        <video
          src={banner.video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          className="video-banner"
          alt={banner.alt}
          style={{ maxWidth: "400px", width: "100%", height: "auto" }}
        />
      )}
      {banner.imagem && (
        <img
          src={banner.imagem}
          alt={banner.alt}
          style={{ maxWidth: "400px", width: "100%", height: "auto" }}
        />
      )}
    </div>
  );
}
