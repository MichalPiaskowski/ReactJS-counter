import React, {Component} from 'react';
import './ButtonsPanel.css';

class ButtonsPanel extends Component {

    // clickAddButton = () => {
    //     this.props.changeCounterValue();
    // }

    resetOrReinitCounter = (flag) => {
        // console.log(flag);
        this.props.resetCounterValue(flag);
    }


    render () {
        return(
           <div className='buttons-panel'>
                <button onClick = {this.props.changeCounterValue}>Add {this.props.incrementorValue}</button> {/* clickAddButton */}
                <button onClick ={() => { this.resetOrReinitCounter(0) } }>Reset</button>
                <button onClick ={() => { this.resetOrReinitCounter(1) } }>ReInit</button>
                <button onClick ={() => { this.resetOrReinitCounter(2) } }>DoubleReinit</button>
                <button onClick ={this.props.changeToTriple}>TripleValue</button>
            </div> 
        )
    }
}

export default ButtonsPanel;