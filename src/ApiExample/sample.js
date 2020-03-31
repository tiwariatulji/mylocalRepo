import React, { Component } from 'react';

class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <div>
                Name:
                {this.props.someVal.name}
                </div>
                <div>
                    Age:
                    {this.props.someVal.age}
                </div>
                {/* Loop */}
                <div>
                {
    this.props.someVal.map((val, i) => {
        return(
            <div key={i}>
    <div>Name: {val.name}</div>
        <div>Age: {val.age}</div>
            </div>
        )
        
    })
                }
                </div>
            </div>
        );
    }
}

export default Sample;