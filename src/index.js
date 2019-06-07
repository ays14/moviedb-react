import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/configStore';
import ConfigRoutes from './routes';
import * as registerServiceWorker from './serviceWorker';

// Define Store
export const store = configStore();

// Define app
const App = (
    <ConfigRoutes store={store}/>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker.unregister();
