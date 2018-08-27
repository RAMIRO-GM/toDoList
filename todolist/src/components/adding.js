import React,{Component} from 'react';
import './adding.css';

class Adding extends Component{
constructor (props){
super (props)
    this.state={value: ''};
    this.handleChange=this.handleChange.bind(this);
    this.addToDo=this.addToDo.bind(this);
}

handleChange(e){
    this.setState({value: e.target.value});
}

addToDo(todo){
    //checking if text (todo variable) isn't empty
    
    if(todo.length > 0){
     this.props.addToDo(todo);   
     this.setState({value: ''}); 
    }
 
}

    render(){
    return (
       
    <div>
        {/*Creating the input box and the button which will add a new task
        the fucntion is called addToDo*/}
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Write down your task"></input>
        <button className="btn btn-success btn-lg col-sm" onClick={()=>this.addToDo(this.state.value)}>Add</button>
    </div>
    
    );
    }
}
export default Adding;