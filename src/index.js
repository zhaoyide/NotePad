import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pad from './pad';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Pad count={50}/>, document.getElementById('root'));
serviceWorker.unregister();
