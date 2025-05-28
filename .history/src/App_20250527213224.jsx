import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import Produtos from "./Produtos";
import CardProdutos from "./CardProdutos";
import MostrarDrop from "./MostrarDrop";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <CardProdutos />
      <MostrarDrop />
    </>
  );
}

export default App;
