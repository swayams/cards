import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Card from './component/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Card question="Test" answer="test"/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
