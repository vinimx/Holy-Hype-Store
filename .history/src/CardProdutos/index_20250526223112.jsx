import "./cardProdutos.css";

export default function CardProdutos() {
  return (
    <div className="produto-card">
      <div className="produto-imagem">
        <img src="/src/assets/yeshua.png" alt="Nome do Produto" />
      </div>
      <div className="produto-info">
        <h3 className="produto-nome">Camiseta YESHUA</h3>
        <span className="produto-preco">R$ 299,90</span>
      </div>
    </div>
  );
}
