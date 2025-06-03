import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import CardProdutos from "./CardProdutos";
import MostrarDrop from "./MostrarDrop";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, [produtosProp]);

  const produtosPrincipais = produtos.filter(
    (p) => p.produtos === "produtos secao"
  );

  const produtosColecoes = produtos.filter((p) => p.produtos === "drop");

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
