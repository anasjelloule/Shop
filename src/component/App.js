import React, { Component } from 'react'
import { Route,Switch} from 'react-router-dom'

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar'
import Main from './Main'
import axios from 'axios';

import Todos from './todos/todos'
import Tododetails from './todos/tododetails'

import AddFloat from './Add-Float'




export default class App extends Component {

  render() {
    return (
        <div>
        <Navbar/>
   
        <div className="container">
        
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route exact path="/todo/:id" component={Tododetails} />
        <Route exact component={()=>(<h1>404</h1>)}/>
        </Switch>

        </div>
         <AddFloat/>

        </div>
    )
  }
}
