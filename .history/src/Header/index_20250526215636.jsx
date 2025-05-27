import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <video
        className="header-video"
        src="/public/videos/header.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="header-content">
        <a></a>
        <p>Nova coleção</p>
      </div>
    </header>
  );
}
