import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678,
            suppressConnectErrors: false,
        }),
    )
);

export default Store;
