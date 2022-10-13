import React from 'react';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {text} = this.state;
        this.props.sendDataToChild(text);

    }

    changeHandler = ({target: {value}}) => {
        this.setState ({
            text: value
        })

    }
 
    
    render() {
        const {text} = this.state;
        return (
            <form onSubmit={this.submitHandler}>

                <input type='text' 
                
                onChange={this.changeHandler} 
                value={text}/>
                <button type='submit'>Submit</button>

            </form>
        );
    }
}

export default ToDoForm;