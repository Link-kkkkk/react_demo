import React from 'react';
import ReactDOM from 'react-dom';

import Route from './routes/Router'
import registerServiceWorker from './registerServiceWorker';

import $ from 'jquery';

ReactDOM.render(<Route />, document.getElementById('root'));

registerServiceWorker();