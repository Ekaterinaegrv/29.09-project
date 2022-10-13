import React from 'react';
import ModalWindow from './ModalWindow';
import './style.css';
import PropTypes from 'prop-types';



class ParentModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isWindow: false
        }
        
    }

    getStateFromChild = (data) => {
        console.log(data)
        // this.setState({
        //     email: data
        // })

    }

    closeWindow = () => {
        this.setState({
            isWindow: false
        })
    }


    render() {
        return(
            <>
            <button className='start-btn button' onClick={()=>{this.setState({isWindow: true})}}>Click to open</button>
            {this.state.isWindow && <ModalWindow sendDataToParent = {this.getStateFromChild} sendCloseWin = {this.closeWindow}/>}
            </>
        )
        }   
}
ModalWindow.defaultProps = {
    sendDataToParent: ()=>{},
    sendCloseWin: ()=>{}

}

ModalWindow.propTypes = {
    sendDataToParent: PropTypes.func.isRequired,
    sendCloseWin: PropTypes.func.isRequired
}


export default ParentModalWindow;