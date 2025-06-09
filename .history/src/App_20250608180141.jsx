import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import CardProdutos from "./CardProdutos";
import MostrarDrop from "./MostrarDrop";
import { useEffect, useState } from "react";
import Rodape from "./Rodape";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/produtos`)
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  }, []);

  const produtosPrincipais = produtos.filter((p) => p.secao === "produtos");

  return (
    <>
      <Menu />
      <Header />
      <CardProdutos produtos={produtosPrincipais} />
      <MostrarDrop />
      <Rodape />
    </>
  );
}

export default App;
