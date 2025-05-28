import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import Produtos from "./Produtos";
import CardProdutos from "./CardProdutos";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <CardProdutos />
    </>
  );
}

export default App;
