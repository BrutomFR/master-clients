import { Button, Input, Layout, message, Modal, Statistic, Table } from "antd";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import CSVReader from "react-csv-reader";
import { IClient } from "src/Core/Interfaces/IClient";
import { Context, IContext } from "src/Utils/context";
// import * as FirebaseHelper from "src/Utils/FirebaseHelper";
import "./.css";
import { IAjouterClients } from "./props";
const { Content } = Layout;
const AjouterClients: FunctionComponent<IAjouterClients> = (props) => {
  const monContext: IContext = useContext(Context);
  const [clients, setClient] = useState<any[]>([]);
  const [typeEntreprise, setTypeEntreprise] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const setClientFunc = (data: any[]) => {
    const _clients: IClient[] = [];
    data.forEach((client: any[]) => {
      if (client[0] === "name" || client.length === 1) {
        // première & dernière ligne. On annule.
      } else {
        _clients.push({
          date_creation: Date.now(),
          entreprise: client[0],
          type_entreprise: typeEntreprise,
          email: client[7],
          adresse: client[4],
          phone_number: client[6],
          services_client: [
            {
              nom: "Pack Google Entreprise",
              date: Date.now(),
              prospection: {
                status: false,
                date_envoie: Date.now(),
                couts_production: [
                  { prix: 0.23, nom: "Carte de visite", href: "" },
                  { prix: 0.97, nom: "Timbre", href: "" },
                  { prix: 0.05, nom: "Enveloppe", href: "" },
                  {
                    prix: 0.1,
                    nom: "Feuille A4",
                    href:
                      "https://www.amazon.fr/Double-Premium-Ramette-feuilles-Format-A4/dp/B00KKEMCUM/",
                  },
                ],
              },
              vente: {
                status: false,
                date_vente: Date.now(),
                couts_production: [
                  { prix: 0.31, nom: "Sticker", href: "" },
                  {
                    prix: 0.12,
                    nom: "NFC",
                    href: "https://www.aliexpress.com/item/32968995666.html",
                  },
                  {
                    prix: 0.09,
                    nom: "Enveloppe A4",
                    href:
                      "https://www.amazon.fr/Purely-Everyday-Enveloppes-Gomm%C3%A9-Lot-25/dp/B00LY25922/",
                  },
                  {
                    prix: 0.03,
                    nom: "0,03€ x3 Feuille A4",
                    href:
                      "https://www.amazon.fr/Double-Premium-Ramette-feuilles-Format-A4/dp/B00KKEMCUM/",
                  },
                  { prix: 0.97, nom: "Timbre Enveloppe A4", href: "" },
                ],
                taxes: [{ nom: "Auto Entreprise ACCRE", taux: 16.5 }],
                prix_vente: 95,
              },
            },
          ],
          unclaimed: client[3],
        });
      }
    });
    setClient(_clients);
    setVisible(true);
  };

  const importClients = () => {
    const clientsVerifs: IClient[] = [];
    clients.forEach((client: IClient) => {
      if (
        !monContext.Clients.get.find((c) => c.adresse === client.adresse) &&
        !monContext.Clients.get.find((c) => c.entreprise === client.entreprise)
      ) {
        client.type_entreprise = typeEntreprise;
        clientsVerifs.push(client);
      }
    });
    monContext.Clients.set(clientsVerifs);
    // FirebaseHelper.UpdateClients(clientsVerifs);
    message.success(
      clientsVerifs.length + " sur " + clients.length + " ajoutés"
    );
  };
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Modal
          title="Entrer le type d'entreprise"
          visible={visible}
          onOk={() =>
            typeEntreprise !== "" ? setVisible(false) : setVisible(true)
          }
        >
          <Input onChange={(e) => setTypeEntreprise(e.target.value)} />
        </Modal>
        {clients.length === 0 ? (
          <CSVReader onFileLoaded={(data) => setClientFunc(data)} />
        ) : (
          <div>
            <Statistic title="Clients trouvés" value={clients.length} />
            <Table
              columns={[
                {
                  title: "Entreprise",
                  dataIndex: "entreprise",
                  key: "entreprise",
                },
                {
                  title: "Revendication",
                  dataIndex: "unclaimed",
                  key: "unclaimed",
                },
                {
                  title: "Adresse",
                  dataIndex: "adresse",
                  key: "adresse",
                },
                {
                  title: "Téléphone",
                  dataIndex: "phone_number",
                  key: "phone_number",
                },
              ]}
              dataSource={clients.map((c: IClient, i) => ({
                key: i,
                entreprise: c.entreprise,
                unclaimed:
                  c.unclaimed === "claimed" ? "Revendiqué" : "Non-revendiqué",
                adresse: c.adresse,
                phone_number: c.phone_number,
              }))}
            />

            <Button onClick={importClients} block>
              Importer les clients
            </Button>
          </div>
        )}
      </div>
    </Content>
  );
};

export default AjouterClients;
