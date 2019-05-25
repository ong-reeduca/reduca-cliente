import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Layout from './hoc/Layout/LayoutOut/LayoutOut';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
