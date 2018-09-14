import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import FirstComponent from './FirstComponent';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<FirstComponent name="Naveen Giri" />, document.getElementById('content'));
registerServiceWorker();

