import React, {
    FunctionComponent,
    useEffect,
    // useContext,
  } from "react";
  import ImgSignature from "src/Img/signature.jpg";
  import ImgHeader from "src/Img/WINWORD_DPKQq4jvKC.png";
  import "./.css";
  // import { Context, IContext } from "../Utils/context";
  import { IPrintNoGmb } from "./props";
  const PrintNoGmb: FunctionComponent<IPrintNoGmb> = (props) => {
    // const monContext: IContext = useContext(Context);
  
    useEffect(() => {
      return () => {
        //
      };
    }, []);
  
    return (
      <div>
        <div className="book">
          <div className="page">
            <div className="header-lettre-prospection">
              <img style={{ width: "100%" }} src={ImgHeader} />
            </div>
            <div className="container-in-header">
              <div className="text-in-container-header">
                <div>DUPONT KELVIN</div>
                <div>Brutom</div>
                <div>Consultant Marketing pour Entreprises Locales</div>
              </div>
            </div>
            <div className="container-header-off">
              <div>Le Vendredi 28 août 2020.</div>
              <div>_______________________________________________________</div>
              <div style={{ marginTop: "10px" }}>Madame, Monsieur,</div>
            </div>
            <div className="container-body-text">
              <div className="paragraphe-lettre">
                Je me permets de vous écrire cette lettre, pour faire un point de
                situation sur votre présence en ligne pour votre salon de coiffure
                MoniCoiffure. J’ai analysé personnellement les points forts et les
                points à améliorer pour faire{" "}
                <b>exploser votre réputation sur internet.</b>
              </div>
              <div className="paragraphe-lettre">
                Grâce aux informations sur votre entreprise laissées sur internet,
                Google a déjà créé votre fiche d’établissement. Certains de vos
                clients ont pris le temps de vous laisser de bons avis. Mais
                attention, votre fiche d’établissement{" "}
                <b>n’a pas officiellement été revendiquée.</b> Par conséquent, il
                est très dangereux de la laisser sans protection.
              </div>
              <div className="paragraphe-lettre">
                Quiconque pourrait facilement revendiquer et fausser vos
                informations sur Google, puis par la même occasion, laisser de
                faux avis qui vous amèneraient ensuite à avoir{" "}
                <b>une mauvaise réputation sur internet.</b>
              </div>
              <div className="paragraphe-lettre">
                La fiche d’établissement sur Google est l’outil le plus efficace
                pour trouver votre entreprise sur internet.
              </div>
              <div className="paragraphe-lettre">
                En effet, elle est un <b>atout majeur</b> pour vous sortir du lot
                parmi votre concurrence dans un rayon de plus de 20 km. Ainsi,
                elle vous permettra d’attirer tous les clients qui cherchent à se
                faire coiffer dans votre coin. C’est simple : les personnes qui
                rechercheront un coiffeur sur Google tomberont automatiquement sur
                <b> votre entreprise.</b>
              </div>
              <div className="paragraphe-lettre">
                Il existe différentes façons de démarquer votre entreprise sur
                Google. Moi, je vais à l’essentiel :
                <div className="puce-avantages-lettre">
                  - Google adore les contenus photos :{" "}
                  <b>je publie pour vous !</b>
                </div>
                <div className="puce-avantages-lettre">
                  - Il préconise les informations correctes sur votre entreprise :
                  <b>je mets à jour toutes les informations, 7j/7 !</b>
                </div>
                <div className="puce-avantages-lettre">
                  - Il ne fonctionne qu’avec des avis clients :{" "}
                  <b>
                    je possède un kit que vous pouvez recevoir directement chez
                    vous, et vous permettant ainsi de récolter de vrais avis
                    clients et de manière originale !
                  </b>
                </div>
              </div>
              <div className="paragraphe-lettre">
                Bref, je m’occupe de tout...
              </div>
              <div className="container-signature">
                <div style={{ marginBottom: "10px" }}>
                  48 rue du Maréchal Foch, Mourmelon le Grand – 51400
                </div>
                <img width="200px" src={ImgSignature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PrintNoGmb;
  