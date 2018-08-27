import React,{Component} from 'react';
import './todoTask.css';

class TodoTask extends Component{
constructor (props){
    super(props);
}

removeToDo(id){
    this.props.removeToDo(id);
}

//The properties of the to do list is passed and showed next to the remove buttom which in turns refres the event=removing
render(){
    return(
        
        <div className="todoRemove">
        <button className="btn btn-danger" onClick={(e)=>this.removeToDo(this.props.id)}>Remove</button> {this.props.todo.text}
        </div>
        
    )
}

}
export default TodoTask;