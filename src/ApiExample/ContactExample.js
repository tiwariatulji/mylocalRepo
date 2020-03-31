import React, { Component } from 'react';
import Sample from './Sample';
import Atul from './Atul';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
           age: 28,
           name: 'shubham',
           padoshiName: 'tets',
           testUserId: '',
           responses: [],
         newArr: [{name: 'shubham', age: 28}, {name: 'atul', age: 21}, {name: 'gaurav', age: 30}],
         fruits: ['Banana', 'apple', 'orange', 'guava']
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(acb => {
            this.setState({ responses: acb })
        });
        
    }
    changeAge() {
        this.setState({ age: 29, name: 'atul' });
    }
    render() {
        const tempValues = this.state.responses;
        return(
            <div>
    <div className="box1">{this.state.name} Age: {this.state.age} {this.state.padoshiName}</div>
                <button onClick={() => this.changeAge()}>Click me</button>
                <div>UserId : {tempValues.length &&  tempValues[50].id}</div>
                
                <div className="atul">some padoshi anme: {this.state.padoshiName}</div>
                {/* Import sample component */}
                <Sample someVal={this.state.newArr} />
                <Atul />
                <div>{this.state.fruits[0]}</div>
                <div>
                    {
                        this.state.fruits.map((name, j) => {
                            return(
                            <div key={j}>Fruit name: {name}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Contact;