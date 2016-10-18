import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Cart from './containers/CartContainer';
import Home from './containers/ProductsContainer';
import Product from './containers/ProductContainer';
import User from './containers/UserContainer';
import CheckOut from './containers/CheckOutPage';

export default
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/cart" component={Cart} />
    <Route path="/user" component={User} />
    <Route path="/checkout" component={CheckOut} />
    <Route path="/product/:id" component={Product} />
  </Route>;
