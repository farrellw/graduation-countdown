import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContainer from './containers/AppContainer';

import registerServiceWorker from './registerServiceWorker';
import CountdownActions from './data/CountdownActions';

CountdownActions.addPhrase('Hi');
CountdownActions.addPhrase('HO');

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();