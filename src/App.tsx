import "ant-design-pro/dist/ant-design-pro.css";
import "antd/dist/antd.css";
import { FunctionComponent, useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./.css";
import Dashboard from './Core/Pages/Dashboard/Dashboard';
import { Context, IContext } from "./Utils/context";
const App: FunctionComponent = (props) => {
  const [sizeScreen, setSizeScreen] = useState<number>(window.innerWidth);
  const getContext: IContext = {
    SizeScreenUser: {
      get: sizeScreen,
      set: setSizeScreen,
    },
  };
  useEffect(() => {
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
