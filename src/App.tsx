import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import { store } from './app/store';

import Login from './features/login';
import BookCourt from './features/book-court';
import OrderConfirmation from './features/order-confirmation';
import OrderResult from './features/order-result';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/book-court" component={BookCourt} />
        <Route path="/order-confirmation/:orderId" component={OrderConfirmation} />
        <Route path="/order-result" component={OrderResult} />
        <Redirect to="/book-court" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
