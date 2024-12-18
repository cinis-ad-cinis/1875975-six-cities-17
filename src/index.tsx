import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const CARD_COUNT = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={CARD_COUNT}/>
  </React.StrictMode>
);
