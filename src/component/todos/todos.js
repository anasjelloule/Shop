import React, { Component } from 'react'
import axios from 'axios'


import Todo from './todo'

export default class todos extends Component {
  constructor(){
    super()
    this.state={
      todos:  []
    }
  }
componentWillMount(){
  axios.get('http://localhost:3001/api/todos').then(res=>{
    // console.log(res)
    this.setState( {todos:res.data})
  })
}

  render() {
const todo=this.state.todos.map((todo,index)=>(
  <Todo key={index} todo={todo}/>
))
    return (
      <div>

<h1 className="z-depth-5">Todos</h1>
<ul className="collection">
{todo}
</ul>
      </div>
    )
  }
}
