import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

Modal.setAppElement('#root');
ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
