// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom'; // Only one Router here

const domain = "dev-5r6yq7i74ultdb48.us.auth0.com";
const clientId = "JJm9u7L96S106jaxJ2iLM4xPTv6TkLV3";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <Router> {/* Wrap the entire App in one Router */}
      <App />
    </Router>
  </Auth0Provider>
);
