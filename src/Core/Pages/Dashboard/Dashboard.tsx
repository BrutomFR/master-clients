import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import React, {
  FunctionComponent,
  useEffect,
  useState,
  // useContext,
} from "react";
import ImgLogo from "src/Img/logo-bruton-blanc-300x300.png";
import "./.css";
// import { Context, IContext } from "../Utils/context";
import { IDashboard } from "./props";

// tslint:disable-next-line:ordered-imports
import { Layout, Menu } from "antd";
import AjouterClients from "../AjouterClients/AjouterClients";
import VoirClients from '../VoirClients/VoirClients';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard: FunctionComponent<IDashboard> = (props) => {
  // const monContext: IContext = useContext(Context);
  const [toggle, setToggle] = useState<boolean>(false);
  const [pageShow, setPageShow] = useState<string>("Accueil");
  useEffect(() => {
    return () => {
      //
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={toggle}
        onCollapse={() => setToggle(!toggle)}
      >
        <div className="logo">
          <img width="40px" src={ImgLogo} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            onClick={() => setPageShow("Accueil")}
            icon={<PieChartOutlined />}
          >
            Accueil
          </Menu.Item>
          <SubMenu key="2" icon={<DesktopOutlined />} title="Clients">
            <Menu.Item key="3" onClick={() => setPageShow("Voir les clients")}>
              Voir les clients
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => setPageShow("Ajouter des clients")}
            >
              Ajouter des clients
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        {pageShow === "Accueil" && (
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
        )}
        {pageShow === "Ajouter des clients" && <AjouterClients />}
        {pageShow === "Voir les clients" && <VoirClients />}

        <Footer style={{ textAlign: "center" }}>
          Master Clients ©2020 Created by Brutom
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
