import "./mostrarDrop.css";

export default function MostrarDrop() {
  return (
    <div className="mostrar-drop">
      <img src="/src/assets/new_drop.png" alt="Imagem das novas camisetas" />
    </div>
    <div className="mostrar-drop-video">
      <video
        className="mostrar-drop-video"
        src="/src/assets/videos/mostrar_drop.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>

  );
}
