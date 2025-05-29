import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import CardProdutos from "./CardProdutos";
import MostrarDrop from "./MostrarDrop";

function App() {
  return (
    <>
      <Menu />
      <Header />
      <CardProdutos />
      <MostrarDrop />
      <CardProdutos titulo="COLEÇOES" />
    </>
  );
}

export default App;
