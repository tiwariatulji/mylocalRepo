Data Transfer parent Component to Child Componnet
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


import React, { Component } from 'react'
import FragmentExam from "./FragmentExam"
export default class ChildCompo extends Component {
    constructor(props){
        super(props);
        this.state={
            Name:"Mayank Patel",
            friend:["Atul Tiwari" ,"Kalpesh Patel","Aksah Patel"],
            comapany:["It","Services","india"]

        }
    }
    render() {
        return (
            <div>
                <h2>Name:{this.state.Name}</h2>
                <FragmentExam someValue={this.state.friend}name={this.state.comapany}/>
            </div>
        )
    }
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Child Component

import React from 'react'

export default function FragmentExam(props) {
    return (
        <div>
            <h3>Friends</h3>
            <ul>
                {props.someValue.map((friend) => <li>{friend}</li>)}
                <h2>Company</h2>
                {props.name.map((company) => <li>{company}</li>)}
            </ul>
        </div>
    )
}

======================================================================

Add seter and geter with props
import React, { Component } from 'react'

export default class ChildCompo extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        name: 'Atul Tiwari',
        friends: [
          'Mayank Patel',
          'Abhinav Singh',
          'Ravi Singh'
        ],
      }
  
      this.addFriend = this.addFriend.bind(this)
    }
    addFriend(friend) {
      this.setState((state) => ({
        friends: state.friends.concat([friend])
      }))
    }
    render() {
      return (
        <div>
          <h3> Name: {this.state.name} </h3>
          <AddFriend addNew={this.addFriend} />
          <ShowList names={this.state.friends} />
        </div>
      )
    }
  }
    
  class AddFriend extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        newFriend: ''
      }
  
      this.updateNewFriend = this.updateNewFriend.bind(this)
      this.handleAddNew = this.handleAddNew.bind(this)
    }
    updateNewFriend(e) {
      this.setState({
        newFriend: e.target.value
      })
    }
    handleAddNew() {
      this.props.addNew(this.state.newFriend)
      this.setState({
        newFriend: ''
      })
    }
    render() {
      return (
        <div>
          <input
            type="text"
            value={this.state.newFriend}
            onChange={this.updateNewFriend}
          />
          <button onClick={this.handleAddNew}> Add Friend </button>
        </div>
      )
    }
  }
  class ShowList extends React.Component {
    render() {
      return (
        <div>
          <h3> Friends </h3>
          <ul>
            {this.props.names.map((friend) => {
              return <li> {friend} </li>
            })}
          </ul>
        </div>
      )
    }
  }