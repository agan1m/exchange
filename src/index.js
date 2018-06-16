import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';


import AppRouter from "./components/AppRouter";


//const store = createStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider /* store={store} */>
            <AppRouter />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);
