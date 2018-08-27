import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Adding from './components/adding';
import TodoTask from './components/todoTask';

{/*
Ramiro Gonzalez for Mariachi.io
To do List example
In the "components" folder you'll find all the components created 
*/}

class App extends Component {
constructor (props){
  super(props);

  this.state={
    todos:[
      {id:0, text:"Example 1. Learn Python by December 10th 2018."},
     
    ],
    nextId: 1
  };
  //binding to the functions that will be created dor adding and deleting
  this.addToDo=this.addToDo.bind(this);
  this.removeToDo=this.removeToDo.bind(this);
}

//adding the task function
addToDo(toDoText){
  //get all the "tasks" from status
  let todos=this.state.todos.slice();

  //pushing the tasks into an array setting the current status
  todos.push({id: this.state.nextId, text: toDoText});
  this.setState({
    todos: todos,
    nextId: ++this.state.nextId
  });
}


//Removing the task function
removeToDo(id){
  {/*filter creates a new array with the task, its index with
  the currents tasks that are not removed.It means if todo.id 
  matches the id it is filtered out and those who don't
  match (are different from id selected) are collected into a new array*/}
  this.setState({
    todos: this.state.todos.filter((todo,index)=>todo.id!== id)
  })
}


  render() {
    return (
      
      <div className="App">
        <div className="todo">
        <Header todoCount={this.state.todos.length}></Header>
        <Adding toDoText="" addToDo={this.addToDo}></Adding>
        <ul>
          {/*get the id values of the tasks and state TodoTask component refers to removeToDo
          It seems the "key" is mandatory even though I dont use it*/}
          {            
            this.state.todos.map((todo)=>{
              return <TodoTask todo={todo} key={todo.id} id={todo.id} removeToDo={this.removeToDo}/>
            })
          }
        </ul>
        </div>
      </div>
      
    );
  }
}

export default App;