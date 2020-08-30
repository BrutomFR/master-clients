import { Button, Layout, message, Statistic, Table } from "antd";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import CSVReader from "react-csv-reader";
import { IClient } from "src/Core/Interfaces/IClient";
import { Context, IContext } from "src/Utils/context";
import * as FirebaseHelper from "src/Utils/FirebaseHelper";
import "./.css";
import { IAjouterClients } from "./props";
const { Content } = Layout;
const AjouterClients: FunctionComponent<IAjouterClients> = (props) => {
  const monContext: IContext = useContext(Context);
  const [clients, setClient] = useState<any[]>([]);
  const [typeEntreprise, setTypeEntreprise] = useState<string>("");
  useEffect(() => {
    setTypeEntreprise("Coiffeur");
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
          services_client: [],
          unclaimed: client[3],
        });
      }
    });
    setClient(_clients);
  };

  const importClients = () => {
    const clientsVerifs: IClient[] = [];
    clients.forEach((client: IClient) => {
      if (!monContext.Clients.get.find((c) => c.adresse === client.adresse)) {
        clientsVerifs.push(client);
      }
    });
    FirebaseHelper.UpdateClients(clientsVerifs);
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
