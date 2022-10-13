import React, { Component } from 'react';

class WindowResizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.eventHandler);
    }

    eventHandler = () => {
        this.setState ({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.eventHandler)
    }
    
    render() {
        const {width, height} = this.state;
        return (
            <>
            <div>Current viewport width: {width} px;</div>
            <div>Current viewport height: {height} px;</div>
            </>
        );
    }
}

export default WindowResizer;
