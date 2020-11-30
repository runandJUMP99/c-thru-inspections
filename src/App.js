import React, {Suspense, useState} from 'react';
import {Route, Switch} from "react-router-dom";

import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Services from "./components/Services/Services";
import Spinner from "./components/UI/Spinner/Spinner";

import "./App.css";

function App() {
  const [language, setLanguage] = useState(false);

  function languageHandler() {
    setLanguage(prevValue => !prevValue);
  }

  return (
    <div className="App">
      <Layout language={language}>
        <button className="LanguageButton" onClick={languageHandler}>
          {language ?
          "For English, Click Here" :
          "Para Español, Hace Clic"}
        </button>
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
