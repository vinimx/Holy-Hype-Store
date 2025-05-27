import "./produtos.css";

export default function Produtos() {
  return (
    <div className="produtos">
      <h2>PRODUTOS</h2>
      <div className="produto-card">
        <div className="produto-imagem">
          {/* Substitua pelo src do produto */}
          <img src="/imagens/produto-exemplo.jpg" alt="Nome do Produto" />
        </div>
        <div className="produto-info">
          <h3 className="produto-nome">Nome do Produto</h3>
          <span className="produto-preco">R$ 299,90</span>
        </div>
      </div>
    </div>
  );
}
