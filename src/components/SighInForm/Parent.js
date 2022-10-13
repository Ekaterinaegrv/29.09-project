import React from 'react';
// import GreetingDiv from './GreetingDiv'
import SighInForm from './SighInForm'

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    sendDataToParent = (data) => {
        this.setState ({
            name: data
        })
    }

    render() {
    return(
        <>
        <SighInForm sendDataToParent = {this.sendDataToParent}/>
        <div className='div'>{this.state.name}</div>
        </>
    )
    }   
}

export default Parent;
