import React from "react";
import ReactDOM from "react-dom";



// import 'bootstrap/dist/css/bootstrap.min.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

 
import App from './component/App';
 

ReactDOM.render(<Router><App /></Router>, document.getElementById("index"));


