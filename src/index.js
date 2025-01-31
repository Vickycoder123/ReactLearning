import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import ShoppingComponent from './components/ShoppingComponent';
import ShoppingClassDemo from './components/ShoppingClassDemo';
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/FormikValidation';
import YupValidation from './components/YupValidation';
import YupValidationComponent from './components/YupValidationComponent';
import ReactHookDemo from './components/ReactHookDemo';
import ContextDemo from './components/ContextDemo';
import UserLogin from './components/UserLogin';
import { CookiesProvider } from 'react-cookie';
import ReducerDemo from './components/ReducerDemo';
import JQueryAjaxDemo from './components/JQueryAjaxDemo';
import ShoppingIndex from './components/ShoppingIndex';
import IShopIndex from './ishop/IShopIndex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <IShopIndex />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
