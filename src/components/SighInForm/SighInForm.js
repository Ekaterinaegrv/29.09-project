import React from 'react';

class SighInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    
 
    changeHandler = ({target:{value, name}}) => {
        this.setState({
            [name]: value
    })
}

    submitHandler = (event) => {
       event.preventDefault();
       const {props: {sendDataToParent}, state:{name}} = this;
       sendDataToParent(name);

    }

    

    render() {
        return (
            <>
            <form onSubmit={this.submitHandler}>
                <label> Your name

                    <input type='text' 
                    placeholder='Your name pls' 
                    name='name' 
                    onChange={this.changeHandler} 
                    value={this.state.name}/>
                </label>

                <button type='submit'>Submit form</button>
            </form>
            </>
        )

    }

}

export default SighInForm;