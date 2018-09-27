import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Count from './components/count';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Count />, document.getElementById('root'));
registerServiceWorker();
