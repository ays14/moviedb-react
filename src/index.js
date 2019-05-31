import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import * as registerServiceWorker from './serviceWorker';

const App = (
    <Routes />
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker.unregister();
