import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react"
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-lyzf58ee883w32oh.us.auth0.com"
      clientId="ed930rZUbrH7Jms3pG7SXwCS5oGwkicc"
      redirectUri={`http://localhost:${window.location.port}/dashboard`}
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </Auth0Provider>,
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
