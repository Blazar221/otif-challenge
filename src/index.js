import React from 'react';
import ReactDOM from 'react-dom/client';
import OtifRoutes from './route';

import "./scss/style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OtifRoutes />
  </React.StrictMode>
);

