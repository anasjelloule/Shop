import React from "react";
import ReactDOM from "react-dom/client";



// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'materialize-css/dist/css/materialize.min.css'
// import 'materialize-css/dist/js/materialize.min.js'
// import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss'

 
import App from './component/App';
 

 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<App />
  </React.StrictMode>
);

 