import React from 'react';
import './style.css';

const currency = 40;

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grivna: '',
            dollar: ''
        }
    }

    changeHandler = ({target:{value, name}}) => {
        this.setState({
            [name]: value
         })
         if (name === 'grivna') {
            this.state.dollar = value / currency;
         } 
         /*
         if (value === NaN) {
            throw TypeError ('Must be a number');
         }
        не пойму, как проверку на число сделать и выкинуть ошибку, если не число
         */
         else {
            this.state.grivna = value * currency;
         }
    }

    render() {
        return (
            <>
            <div className='bg'></div>
            <form className='form-wrapper'>
                <label> UAH
                    <input 
                    className='input'
                    type='text' 
                    onChange={this.changeHandler} 
                    name='grivna' 
                    value={this.state.grivna}/>
                </label>

                <label> USD
                    <input 
                    className='input'
                    type='text' 
                    onChange={this.changeHandler} 
                    name='dollar' 
                    value={this.state.dollar}/>
                </label>
            </form>
            </>
        )
    }

}

export default Converter;
