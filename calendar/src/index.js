import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './Pages/Register/Register';
// import Routering from './Routes/routes';
import GlobalStyle from './Styles/global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Register />
  </React.StrictMode>
);

