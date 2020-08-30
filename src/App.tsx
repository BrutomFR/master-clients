import "ant-design-pro/dist/ant-design-pro.css";
import "antd/dist/antd.css";
import { FunctionComponent, useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./.css";
import { IClient } from "./Core/Interfaces/IClient";
import Dashboard from "./Core/Pages/Dashboard/Dashboard";
import { Context, IContext } from "./Utils/context";
import * as FirebaseHelper from "./Utils/FirebaseHelper";
const App: FunctionComponent = (props) => {
  const [sizeScreen, setSizeScreen] = useState<number>(window.innerWidth);
  const [clients, setClients] = useState<IClient[]>([]);
  const getContext: IContext = {
    SizeScreenUser: {
      get: sizeScreen,
      set: setSizeScreen,
    },
    Clients: {
      get: clients,
      set: setClients,
    },
  };
  useEffect(() => {
    FirebaseHelper.GetClient().subscribe((r: IClient[]) => setClients(r));
    return () => {
      //
    };
  }, []);

  return (
    <Context.Provider value={getContext}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
