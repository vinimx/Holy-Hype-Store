import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import CardProdutos from "./CardProdutos";
import MostrarDrop from "./MostrarDrop";
import { produtos } from "./data";
import Rodape from "./Rodape";

function App() {
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
