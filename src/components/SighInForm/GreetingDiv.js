import React from 'react';
import './style.css';

class GreetingDiv extends React.Component {
    constructor(props) {
        super(props);
       
    }


    render() {
        return (
        <>
        <div className='div'>{this.props}</div>
        </>
        )

    }

}

export default GreetingDiv;