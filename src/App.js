import React, {Suspense} from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Services from "./components/Services/Services";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
