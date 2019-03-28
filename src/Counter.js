//--------------------------------
// PRZYKŁAD KOMPONENTU FUNKCYJNEGO
//--------------------------------

// import React from "react";

// const Counter = () => {
//     return (
//         <div className='counter'>Licznik</div>
//     )
// }

// export default Counter;

//-----------------------------
//PRZYKŁAD KOMPONENTU KLASOWEGO
//-----------------------------

// import React, {Component} from "react";
// import "./Counter.css"
// class Counter extends Component {
// render() {
// return(<div className="counter">
// Licznik - {this.props.initValue}
// {this.props.imie}

// </div>)
// }
// }
// export default Counter;

//-------------------------
//PRZYKŁAD STANU KOMPONENTU
//-------------------------

import React, {Component} from "react";
import "./Counter.css"
import ButtonsPanel from './ButtonsPanel';
import IncrementPanel from './IncrementPanel';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
        }
    }

    // changeValue = () => {
    //     this.setState({
    //        counterValue: parseInt(this.state.counterValue) +1,
    //     })
    // }


    changeValue = () => {
        this.setState((prevValue) => {
            return({
                counterValue: parseInt(prevValue.counterValue) + 1,
            })
        })
    }

    resetCounter = (flag) => {
        // console.log('resetCounter METHOd of Counter' + flag);
        if (flag === 0) {
            this.setState ({
                counterValue: 0,
                });
        } else if (flag === 1) {
            this.setState ({
                counterValue: this.props.initValue,
                })
        } else if (flag === 2) {
            this.setState ({
                counterValue: (this.props.initValue*2),
            })
        }
    }

    counterValueTriple = () => {
        this.setState({
        counterValue: (this.state.counterValue*3),
        })
    } 

    changeIncrementor = (e) => {
        this.setState({
            incrementorValue: e.target.incrementorValue,
        })
        console.log('funkcja w counter ' + this.props.incrementorValue);
    }


    render() {
        return(<div className="counter">
            <span className = 'value'>
                {this.state.counterValue}  
            </span>
            <ButtonsPanel changeCounterValue={this.changeValue} resetCounterValue={this.resetCounter} changeToTriple={this.counterValueTriple}/>
            <IncrementPanel changeValueIncrementor ={this.changeIncrementor}/>
        </div>)
    }
}
export default Counter;