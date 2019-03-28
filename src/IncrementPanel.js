import React, {Component} from 'react';
import './IncrementPanel.css';

class IncrementPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incrementorValue: 0,
        } 
    }

    render(){
        return(
        <input  type="number" name="incrementor"
        min="0" max="100" onChange={this.props.changeValueIncrementor}></input>  // ref={(data) => {this._inputStep = data} } zobacz w dokumentacji atrybut ref='', tak dostajemy się do pola input
        )
    }

}


export default IncrementPanel;