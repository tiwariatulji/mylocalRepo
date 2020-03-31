import React, { Component } from 'react'
import './App.css';

export default class example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeColor: 'color1',
            widthValue: ''
        }
    }
    hanndleClick = (e) => {
        console.log(e)
        this.setState({
            activeColor: e
        })
    }
    changeWidth = (e) => {
        console.log(e)
        this.setState({
            widthValue: e
        })
    }
    render() {

         let Butttongroup = []
         for (let i = 0; i <= 100; i = i + 10) {

          console.log('width'+i)
              Butttongroup.push(<button onClick={() => this.changeWidth('width'+i)}> {i}%</button>)
         
        }
        let buttons=[]
        for (let i = 0; i < 10; i = i ++) {

            console.log('color'+i)
             buttons.push(<button onClick={() => this.hanndleClick('color'+i)}>{'color'+i} </button>)
         
        }
        
    
        return (
            <div>
                <h1 className={this.state.activeColor+''}>hello</h1>
                {buttons}
                <button onClick={() => this.hanndleClick('color1')}> red</button>
                {/* <button onClick={() => this.hanndleClick('color2')}> green</button>
                <button onClick={() => this.hanndleClick('color3')}> Blue</button> */}
                <br />
                <br />
                <br />
                <br />
                <div className={`${this.state.widthValue + ' range'}`} ></div>
                {Butttongroup}
                  {/* <button onClick={()=>this.changeWidth()}> 0%</button>
                 <button onClick={()=>this.changeWidth('width10')}> 10%</button>
                 <button onClick={()=>this.changeWidth('width20')}> 20%</button>
                 <button onClick={()=>this.changeWidth('width30')}> 30%</button>
                 <button onClick={()=>this.changeWidth('width40')}> 40%</button>
                 <button onClick={()=>this.changeWidth('width50')}> 50%</button>
                 <button onClick={()=>this.changeWidth('width60')}> 60%</button>
                  <button onClick={()=>this.changeWidth('width70')}> 70%</button>
                 <button onClick={()=>this.changeWidth('width80')}> 80%</button>
                  <button onClick={()=>this.changeWidth('width90')}> 90%</button>
                 <button onClick={()=>this.changeWidth('width100')}> 100%</button>  */}
                
            </div>
        )
    }
}
