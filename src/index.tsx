import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google"
import './i18n'

import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);
root.render(
  <GoogleOAuthProvider clientId='736069204221-r71viav1588hd2pacsr0pjjidegpc13r.apps.googleusercontent.com'>
    {/*<React.StrictMode> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/*</React.StrictMode>*/}
  </GoogleOAuthProvider>
);
