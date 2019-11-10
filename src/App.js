import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import './styles/base.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);