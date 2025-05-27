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
        <a href="#" className="header-link">
          <p>Nova coleção</p>
        </a>
      </div>
    </header>
  );
}
