import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import Product from './views/Product';
import Shop from './views/Shop';
import './styles/base.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from './views/Error404';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/shop" component={Shop}></Route>
                <Route path="/car/:car_slug" component={Product}></Route>
                <Route path="*" component={Error404}></Route>
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);