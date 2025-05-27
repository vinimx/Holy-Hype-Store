import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <video className="header-video" autoPlay loop muted>
        <source src="/public/videos/header.mp4" type="video/mp4" />
      </video>
    </header>
  );
}
