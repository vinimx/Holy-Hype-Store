import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import Produtos from "./Produtos";
import CardProdutos from "./CardProdutos";

function App() {
  const sampleProduto = {
    imagem: "/public/imagens/produto1.jpg",
    titulo: "Camiseta Street Style",
    preco: 89.90,
    tags: ["Street", "Casual", "Novo"],
    onComprar: () => {
      console.log("Produto adicionado ao carrinho!");
    }
  };

  return (
    <>
      <Menu />
      <Header />
      <Produtos />
      <CardProdutos produto={sampleProduto} />
    </>
  );
}

export default App;
