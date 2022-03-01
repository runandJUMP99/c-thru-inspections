import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Services from "./components/Services/Services";
import LanguageButton from "./components/UI/LanguageButton/LanguageButton";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  const [language, setLanguage] = useState(false);

  return (
    <div className="App">
      <Layout language={language}>
        <Suspense fallback={<Spinner />}>
          <LanguageButton language={language} setLanguage={setLanguage} />
          <Switch>
            <Route path="/" exact render={() => <Home language={language} />} />
            <Route
              path="/services"
              render={() => <Services language={language} />}
            />
            <Route
              path="/contactus"
              render={() => <Contact language={language} />}
            />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
