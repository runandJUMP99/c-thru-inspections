import React, {Suspense, useState} from 'react';
import {Route, Switch} from "react-router-dom";

import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Services from "./components/Services/Services";
import Spinner from "./components/UI/Spinner/Spinner";

function App(props) {
  const [language, setLanguage] = useState(false);

  const style = {
    background: "#ecf4f3",
    border: "none",
    borderRadius: "8px",
    color: "#143d59",
    fontWeight: "bold",
    left: 0,
    margin: "0 0.5rem",
    padding: "0.5rem",
    position: "fixed",
    top: 0,
    zIndex: 25,
}

  function languageHandler() {
    setLanguage(prevValue => !prevValue);
  }

  return (
    <div className="App">
      <Layout language={language}>
        <button onClick={languageHandler} style={style}>Para Español, Hace Clic</button>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact render={() => <Home language={language} />} />
            <Route path="/services" render={() => <Services language={language} />} />
            <Route path="/contactus" render={() => <Contact language={language} />} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
