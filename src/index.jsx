import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';

import {store, persistor} from './store/store.js';
import axios from 'axios';

import store from './store/store.js';

import store from './store/store';

import handleGraphSelect from './actions/handleGraphSelect';
import moment from 'moment'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render( <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
</Provider>, document.getElementById('app'), () => handleGraphSelect({name: "bitcoin", from: moment().subtract(1, 'day').format("'YYYY-MM-DD'"), to: moment().format('YYYY-MM-DD')})(store.dispatch));