import React from 'react';
import ReactDOM from 'react-dom/client';
import Routering from './Routes/routes';
import GlobalStyle from './Styles/global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routering />
  </React.StrictMode>
);

