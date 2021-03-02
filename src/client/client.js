//starting point of client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux' // createstore is used to create a redux store and applymiddleware is used to hookup any middleware we might be using in our application like here we are using thunk 
import thunk from 'react-thunk' //middleware library use to handle async action creators 
import {Provider} from 'react-redux' // which ties our store and react app together , and is react component that is used to communicate data from store to any connected components in our application
import Routes from './Routes';
import reducers from './reducers'
//provider has access to redux store  , any time when redux store changes , provider will alert any conected component inside our application, they need to render ....
const store = createStore(reducers,{}, applyMiddleware(thunk))

ReactDOM.hyderate(
    <Provider store={store}> 
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    </Provider>
    document.querySelector('#root')
)