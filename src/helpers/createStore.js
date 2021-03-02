//server side setup is slightly different , not using provider tag (provider render our page when change in redux store)
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers'

export default () => {
    const store = createStore(reducers,{},applyMiddleware(thunk));

    return store;
}

