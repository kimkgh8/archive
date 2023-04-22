import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './js/App';
import Login from './js/components/Login'

const login = ReactDOM.createRoot(document.getElementById('login'));
login.render(
	<React.StrictMode>
	<Login />
	</React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

