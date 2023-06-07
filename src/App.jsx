import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout/Layout";

import RoutesComponent from "./components/Routes/Routes";
import "./index.css";

function App() {
  return (
    <Layout>
      <RoutesComponent />
    </Layout>
  );
}

export default App;
