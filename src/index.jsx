import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain="dev-c7jccwgb5x7xqvsp.us.auth0.com";
const client="sVzXbROdyYYuMiEbSGqGvhc8p6AjKogr";

console.log(domain, client);
//const secrtet=process.env.REAC_APP_CLIENT_SECRET_AUTH0;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
    domain={domain}
    clientId={client}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
