import React from 'react';
import ReactDOM from 'react-dom';

import Route from './Router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Route />, document.getElementById('root'));

registerServiceWorker();