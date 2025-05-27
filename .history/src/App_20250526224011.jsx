import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Header from "./Header";
import Produtos from "./Produtos";
import CardProdutos from "./CardProdutos";
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <div role="alert" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Algo deu errado:</h2>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

function App() {
  const sampleProduto = {
    imagem: "/imagens/produto1.jpg",
    titulo: "Camiseta Street Style",
    preco: 89.90,
    tags: ["Street", "Casual", "Novo"],
    onComprar: () => {
      console.log("Produto adicionado ao carrinho!");
    }
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Menu />
      <Header />
      <Produtos />
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <CardProdutos produto={sampleProduto} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
