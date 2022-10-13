import React from 'react';
import './style.css';
import imgsrc from './post.png'

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

    }

    submitHandler = (event) => {
        event.preventDefault();
        const {props: {sendDataToParent}, state:{email}} = this;
        sendDataToParent(email); 
        this.closeWindowHandler();
    }

    closeWindowHandler = () => {
        this.props.sendCloseWin();

    }

    changeHandler = ({target: {value}}) => {
        this.setState({
            email: value
        })
    }
    
    render() {
        return (
            <>
            <div className='bg' onClick={this.closeWindowHandler}></div>
              
                <div className='window'>
                <div className='close-btn' onClick={this.closeWindowHandler}>X</div>
                    <img src={imgsrc} className="img"/>
                    <h2>Don't miss updates from us!</h2>
                    <p>Mixtape normcore meditation edison club hello window</p>
                    
                    <form onSubmit={this.submitHandler}>
                        <input 
                            className='input' 
                            name='email' 
                            placeholder='Enter your email adress'
                            onChange={this.changeHandler}
                            value={this.state.email}
                            >
                            </input>
                        <button className='button' type='submit'>Subscribe now</button>
                    </form>
                </div>
                
            
            
            </>
        )

        
    }
}




export default ModalWindow;