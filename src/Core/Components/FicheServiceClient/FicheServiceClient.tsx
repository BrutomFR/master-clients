import Modal from "antd/lib/modal/Modal";
import React, {
  FunctionComponent,
  useEffect,
  useState,
  // useContext,
} from "react";
import { IClient } from "src/Core/Interfaces/IClient";
import "./.css";
// import { Context, IContext } from "../Utils/context";
import { IFicheServiceClient } from "./props";
const FicheServiceClient: FunctionComponent<IFicheServiceClient> = (props) => {
  // const monContext: IContext = useContext(Context);
  const [client, setClient] = useState<IClient>({} as IClient);
  useEffect(() => {
    setClient(props.client);
    return () => {
      //
    };
  }, []);

  return (
    <Modal
      title={client.entreprise}
      onOk={() => props.cancel(false)}
      onCancel={() => props.cancel(false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default FicheServiceClient;
