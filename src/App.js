import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import AddTodo from './components/layout/addTodo'
import Todos from './components/Todo'
import uuid from 'uuid';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Too many things to complete',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Complete The React',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Complete The Flutter',
        completed: false,
      },
    ]
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  //addtodo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
          <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
      

