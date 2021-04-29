import React from "react";
//imgs
import { GOLDENBOY, CRYPTO, USERPROFILE, GIRL } from "../../shared/imgLinks";
//components
import Button from "../../components/button";
import Header from "../../components/header/";
import Hero from "../../components/hero";
import InfoContainer from "../../components/info-container";
import Card from "../../components/card";
//css
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <InfoContainer
        mainTitle="Como Adquirir Artes Digitais."
        title1={"Descubra Arte Digital Tokenizada."}
        text1={
          "O artista publica uma obra de arte digital de versão única autenticada. Eles são certificados no blockchain Ethereum para evitar falsificações e fornecer fontes históricas."
        }
        title2={"Compra e venda"}
        text2={
          "Compre pelo preço pedido ou lance. Depois de possuir uma obra, você pode revendê-la para outros colecionadores no mercado secundário."
        }
        title3={"Mostre sua coleção"}
        text3={
          "Personalize seu perfil e mostre sua coleção de arte para clientes em todo o mundo. Exiba seu trabalho na galeria VR, display digital ou qualquer outro lugar de sua preferência."
        }
        buttonText={"Adquira agora"}
        link={"market"}
      />

      <div className="container-custom activity-container">
        <h2 className="activity-title">Atividades Recentes</h2>

        <div className="activity-card-container">
          <div className="card">
            <img src={GIRL} alt="GIRL" width="100%" height="100%" />
            <div className="activity-info">
              <div className="activity-photo-profile">
                <img src={USERPROFILE} alt="" />
              </div>
              <div className="activity-transaction">
                <span>
                  <a href="#">@marques</a> comprou <a href="#">Wizardry</a> por
                  R$3.000,00
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={GOLDENBOY} alt="" />
            <div className="activity-info">
              <div className="activity-photo-profile">
                <img src={USERPROFILE} alt="" />
              </div>
              <div className="activity-transaction">
                <span>
                  <a href="#">@Blaxpow</a> comprou <a href="#">BTCBoy</a> por
                  R$19.980,00
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={CRYPTO} alt="" />
            <div className="activity-info">
              <div className="activity-photo-profile">
                <img src={USERPROFILE} alt="" />
              </div>
              <div className="activity-transaction">
                <span>
                  <a href="#">@Soul</a> comprou{" "}
                  <a href="#">CryptoArt is a big bubble</a> por R$1.000,00
                </span>
              </div>
            </div>
          </div>
        </div>

        <Button text={"ver atividades"} link={"activity"} />
      </div>

      <InfoContainer
        mainTitle="A forma como o artista trabalha."
        title1={"Verifique seu trabalho."}
        text1={
          "Assine digitalmente seu trabalho criando um certificado tokenizado."
        }
        title2={"Somos os primeiros a experimentar."}
        text2={
          "RandomArtwork ainda está no estágio inicial de acesso, recrutando apenas um punhado de artistas selecionados."
        }
        title3={"Defina o preço como quiser"}
        text3={
          "Defina um preço ou conduza um leilão e deixe os colecionadores darem seus lances."
        }
        buttonText={"Inscrever-se"}
        link={"#"}
      />

      <div className="container-custom">
        <h2 className="title home-preview-title">
          Veja a movimentação do mercado.
        </h2>
        <div className="container-custom home-preview-container">
          <Card
            cardTitle={"Top Coletores"}
            value1={47}
            value2={47}
            value3={49}
            recentActionText={"Coletado Recentemente"}
          />
          <Card
            cardTitle={"Top Artistas"}
            value1={"R$ 1,565,427"}
            value2={"R$ 1,519,120"}
            value3={"R$ 1,259,280"}
            recentActionText={"Vendas Recentes"}
          />
          <Card
            cardTitle={"Top Coleções"}
            value1={510}
            value2={446}
            value3={422}
            recentActionText={"Coletado Recentemente"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
