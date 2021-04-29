import React from "react";
import "./faq.css";
import Header from "../../components/header";

const Faq = () => {
  return (
    <>
      <Header />
      <div className="container-custom faq-container">
        <div className="content-wrapper">
          <h3>O que é CryptoArte e qual é o seu valor?</h3>
          <p>
            Cada obra de arte no RandomArtwork é um colecionável digital, um
            objeto digital protegido por criptografia e rastreado no blockchain.
            Esta é apenas uma afirmação peculiar que prova que são itens raros
            que podem ser coletados e têm o mesmo valor de criptomoedas como
            Ethereum e Bitcoin.
          </p>
        </div>
        <div className="content-wrapper">
          <h3>Por que construir uma rede social para CryptoArte?</h3>
          <p>
            Acreditamos que o NFT é de natureza social. Como os colecionáveis
            digitais têm registros de propriedade transparentes, eles são muito
            adequados para ambientes sociais. A camada social pode tornar mais
            fácil avaliar o valor e outros ambientes em torno dos itens no
            mercado. Além disso, é ainda mais interessante!
          </p>
        </div>
        <div className="content-wrapper">
          <h3>Como eu faço para comprar?</h3>
          <p>
            Clique aqui para criar uma conta e conectá-la com a carteira
            Ethereum. Depois de criar uma conta, verifique o feed do evento e
            siga alguns de seus artistas favoritos para se inspirar e começar a
            colecionar.
          </p>
        </div>
        <div className="content-wrapper">
          <h3>
            Qual é a motivação por trás dos royalties do artista no mercado
            secundário?
          </h3>
          <p>
            Acreditamos que a capacidade de garantir que os artistas recebam uma
            certa porcentagem da receita do mercado secundário é um dos recursos
            mais revolucionários e interessantes fornecidos pelos contratos
            inteligentes da Ethereum. Isso é semelhante ao fato de que os
            músicos venderam uma certa porcentagem dos discos de vinil lançados
            na década de 1960, e eles ainda são vendidos em lojas de discos
            usados hoje.
          </p>
        </div>
        <div className="content-wrapper">
          <h3>Qual é a tecnologia por trás do RandomArtwork?</h3>
          <p>
            RandomArtwork é um mercado ponto a ponto para tokens insubstituíveis
            (ERC-721 NFT) construído em Ethereum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Faq;
