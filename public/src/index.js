import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {Router,browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(
    <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
  , document.querySelector('.container'));
