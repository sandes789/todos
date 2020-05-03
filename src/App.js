import React, { Component } from 'react';
import './App.css';
import Lists from './components/ListTodos';
import AddList from './components/AddList'
import { uid } from 'react-uid'

class App extends Component {
  state = {
    todos: [

    ]
  }

  addAction = (newTodos) => {
    let todos = [...this.state.todos, newTodos]
    newTodos.id = this.state.todos.map(list => {
      return (
        uid(list)
      )
    })
    newTodos.editable = 0;
    this.setState({
      todos: todos

    })
  }

  deleteAction = (id) => {
    console.log(id)
    const deleteTodos = this.state.todos.filter(list => {
      return list.id !== id
    })
    this.setState({
      todos: deleteTodos
    })
  }

  editAction = () => {
    const { todos } = this.state;
    todos.map(list => {
      if (list.editable === 0) {
        list.editable = 1
      }
    })
    this.setState({
      todos: todos
    })
  }

  inputAction = (title, id) => {
    const { todos } = this.state;
    todos.map(list => {
      if (list.id === id && list.editable === 1) {
        list.title = title
      }
    })
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">

        <div className="todos-title">
          <h2>Add Todos</h2>
          <AddList addAction={this.addAction} />
        </div>
        <Lists inputAction={this.inputAction} deleteAction={this.deleteAction} editAction={this.editAction} todoslist={this.state.todos} />
      </div >
    );
  }
}

export default App;

