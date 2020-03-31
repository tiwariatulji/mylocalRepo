import React, { Component } from 'react'


class TaskList extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[{task:"make functional component"},
        
      {task:"prepair for office"},
      {task:"go for dinner"},
    ]
    }

    }
    handleAddTask = (task) => {
      // e.preventDefault();
      // console.log("task data", newTask);
      const newList = [...this.state.data];
      newList.push({task});
      this.setState({data: newList});
    }
  
  render() {
    return (
      <div>
       <h1>Task List</h1>
       <ul>
    {this.state.data.map((text, i)=> {
      return <li key={i} >{text.task}</li>
    } )}
       </ul>
       <AddTask callbackAddTask={this.handleAddTask}/>
      </div>
    )
  }
}

const Task = ({text}) => {
  return <li>
    {text}
  </li>
}

class AddTask extends Component{
  constructor(props){
    super(props);
    this.state={
      newTask:""
    }
  }
  handleChange = (event) => {
    this.setState({newTask:event.target.value});
  }
 
  handleAddTask = e => {
    e.preventDefault();
    this.props.callbackAddTask(this.state.newTask)

  }
  render(){
    console.log("this.props", this.props,this.state);
    return(
      <form>
        <h1>Enter your name</h1>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.handleAddTask}> Add Task</button>
      </form>
    )
  }
}

export default TaskList;




class HelloUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'Hello India'
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div>
        Hello {this.state.username} <br />
        Change Name:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}