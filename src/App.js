import { Component, createRef } from 'react';
import './App.css';

class AppClass extends Component 
{
  constructor(){
    super();
    this.inputRef = createRef();
  }
  componentDidMount(){
    // this.inputRef.current.value = "100"
  }
  checkRef(){
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.color = "red"
  }
  render(){
    return (
      <div>
        <h1>Refs in class component</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>{this.checkRef()}}>Check Refs</button>
      </div>
    )
  }
}

export default AppClass;
