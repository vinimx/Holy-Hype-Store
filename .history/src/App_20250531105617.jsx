import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import CardProdutos from "./CardProdutos";
import MostrarDrop from "./MostrarDrop";
import { useEffect, useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [headerVideo, setHeaderVideo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data.produtos));
        setHeaderVideo(data.headerVideo);
  }, []);

  const produtosPrincipais = produtos.filter((p) => p.secao === "produtos");

  return (
    <>
      <Menu />
      <Header videoSrc={headerVideo} />
      <CardProdutos produtos={produtosPrincipais} />
      <MostrarDrop />
    </>
  );
}

export default App;
