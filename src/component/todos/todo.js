import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class todo extends Component {
    constructor(props){
        super(props)
        this.state={
            todo: this.props.todo
        }
    }
  render() {
    return (
<li className="collection-item"><div>{this.state.todo.title}<Link to={`/todo/${this.state.todo.id}`} className="secondary-content"><i className="material-icons">send</i></Link></div></li>

    )
  }
}
