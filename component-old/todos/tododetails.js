import React, { Component } from 'react'
import axios from 'axios'

export default class tododetails extends Component {

    constructor(){
        super()
        this.state={
            todo:{}
        }
    }

    componentWillMount(){
    const todoid='5c8e282eb4de4540f40f2496'
    axios.get(`http://localhost:3001/api/todos/${todoid}`).then(res=>{
        this.setState({todo:res.data})
    })
}  
  
    render() {
    return (
      <div>
        {this.state.todo.title}
      </div>
    )
  }
}
