import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import CardProdutos from "./CardProdutos";
import MostrarDrop from "./MostrarDrop";

function App() {
  const [produtos, setProdutos] = useState([]);
  return (
    <>
      <Menu />
      <Header />
      <CardProdutos produtos={produtosPrincipais} />
      <MostrarDrop />
      <CardProdutos titulo="COLEÇOES" produtos={produtosColecoes} />
    </>
  );
}

export default App;
