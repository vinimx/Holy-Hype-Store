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
        <h1>Look de casal para ir no culto </h1>
        <p>Streetwear Premium</p>
      </div>
    </header>
  );
}
