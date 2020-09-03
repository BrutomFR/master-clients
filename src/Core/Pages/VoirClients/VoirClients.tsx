import { ProfileOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Layout,
  message,
  Modal,
  Popconfirm,
  Row,
} from "antd";
import MUIDataTable from "mui-datatables";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import FicheServiceClient from "src/Core/Components/FicheServiceClient/FicheServiceClient";
import { IService } from "src/Core/Interfaces/Client/IService";
import { IClient } from "src/Core/Interfaces/IClient";
import ImgLogo from "src/Img/logo-bruton-blanc-300x300.png";
import { Context, IContext } from "src/Utils/context";
import * as FirebaseHelper from "src/Utils/FirebaseHelper";
import "./.css";
import { IVoirClients } from "./props";
const { Content } = Layout;

const VoirClients: FunctionComponent<IVoirClients> = (props) => {
  const monContext: IContext = useContext(Context);
  const [modalFicheClient, setModalFicheClient] = useState<boolean>(false);
  const [clientSelected, setClientSelected] = useState<IClient>({} as IClient);
  const [modalFicheServiceClient, setModalFicheServiceClient] = useState<
    boolean
  >(false);
  const openFicheClient = (value: any) => {
    let _client = monContext.Clients.get.find(
      (c) => c.entreprise === value.rowData[1] && c.adresse === value.rowData[4]
    );
    if (_client) {
      setClientSelected(_client);
      setModalFicheClient(true);
    } else
      message.error(
        "Client non trouvé dans la base de données. Le nom et l'adresse n'existent pas."
      );
  };

  const columns = [
    "Date d'ajout",
    "Entreprise",
    "Type d'entreprise",
    "Revendication",
    "Adresse",
    "Téléphone",
    {
      name: "",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
            <Button
              onClick={() => openFicheClient(tableMeta)}
              icon={<ProfileOutlined />}
            />
          );
        },
      },
    },
  ];
  const sendLettreProspection = (service: IService | undefined) => {
    if (service) {
      service.prospection.status = true;
      service.prospection.date_envoie = Date.now();
      FirebaseHelper.UpdateClient(clientSelected);
    }
  };
  useEffect(() => {
    return () => {
      //
    };
  }, []);

  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {modalFicheClient && (
          <Modal
            width="1000px"
            title={clientSelected.entreprise}
            visible={modalFicheClient}
            onOk={() => setModalFicheClient(false)}
            onCancel={() => setModalFicheClient(false)}
            cancelText="Retour"
            okText="Sauvegarder"
          >
            {modalFicheServiceClient && (
              <FicheServiceClient
                client={clientSelected}
                cancel={setModalFicheServiceClient}
              />
            )}
            <div className="container-header-fiche-client">
              <img width="50px" src={ImgLogo} alt="logo-brutom" />
              <div className="container-info-header">
                <h2>{clientSelected && clientSelected.entreprise}</h2>
                <p>{clientSelected.adresse}</p>
                <p>
                  <i>{clientSelected.type_entreprise}</i>
                </p>
              </div>
            </div>
            <div className="container-body-fiche-client">
              <Row>
                <Col span={8}>
                  <b>Email:</b>{" "}
                  {clientSelected.email !== "" ? (
                    clientSelected.email
                  ) : (
                    <span style={{ color: "red" }}>Pas d'email.</span>
                  )}
                </Col>
                <Col span={8}>
                  <b>Tel:</b> {clientSelected.phone_number}
                </Col>
                <Col span={8}>
                  <b>Status:</b>{" "}
                  {clientSelected.unclaimed === "claimed" ? (
                    <span style={{ color: "green" }}>Revendiqué</span>
                  ) : (
                    <span style={{ color: "red" }}>Non-revendiqué</span>
                  )}
                </Col>
              </Row>
            </div>
            <div className="container-footer-fiche-client">
              <h2>
                <b style={{ textAlign: "center" }}>Services:</b>
              </h2>
              <Card
                title="Pack Google Entreprise"
                style={{ width: 300 }}
                onClick={() => setModalFicheServiceClient(true)}
              >
                <p>
                  <b>Lettre de prospection:</b>{" "}
                  {clientSelected.services_client.find(
                    (s) =>
                      s.nom === "Pack Google Entreprise" &&
                      s.prospection.status === true
                  ) ? (
                    "Envoyé"
                  ) : (
                    <span>
                      <span style={{ color: "red" }}>Non envoyée.</span>
                      <Popconfirm
                        title="Lettre envoyée ?"
                        onConfirm={() =>
                          sendLettreProspection(
                            clientSelected.services_client.find(
                              (s) => s.nom === "Pack Google Entreprise"
                            )
                          )
                        }
                        okText="Oui"
                        cancelText="Non"
                      >
                        <div>
                          <Button>Envoyer</Button>
                        </div>
                      </Popconfirm>
                    </span>
                  )}
                </p>
                <p>
                  <b>Vente:</b>{" "}
                  {clientSelected.services_client.find(
                    (s) =>
                      s.nom === "Pack Google Entreprise" &&
                      s.vente.status === true
                  ) ? (
                    "Envoyé le " +
                    clientSelected.services_client.find(
                      (s) => s.nom === "Pack Google Entreprise"
                    )?.vente.date_vente +
                    ")"
                  ) : (
                    <span style={{ color: "red" }}>Non envoyée.</span>
                  )}
                </p>
              </Card>
            </div>
          </Modal>
        )}

        <MUIDataTable
          options={{
            filter: false,
            print: false,
            download: false,
            viewColumns: false,
            selectableRows: "none",
          }}
          title={""}
          data={monContext.Clients.get.map((client: IClient, i) => {
            return [
              client.date_creation,
              client.entreprise,
              client.type_entreprise,
              client.unclaimed,
              client.adresse,
              client.phone_number,
            ];
          })}
          columns={columns}
        />
      </div>
    </Content>
  );
};

export default VoirClients;
