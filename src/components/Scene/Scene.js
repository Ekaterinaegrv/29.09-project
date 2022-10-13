import React from 'react';
import Toggler from './Toggler';
import './style.css';

class Scene extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            light: true
        }   
    }

    toggleScene() {
        this.setState ({
            light: !this.state.light
        })
        
    }

  

    render() {
        const {light} = this.state;
        return (
        <div className={light ? 'scene-on' : 'scene-off'}>
            <Toggler changeParentState={()=>{this.toggleScene()}}/>
        </div>
        )

    }
}

export default Scene;

