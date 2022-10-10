import React from 'react';
import './style.css';

const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

class ConverterApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UAH: '',
            USD: '',
            USD_buy: '',
            USD_sale: ''
        }
    }
        
    getCurrency = () => {
        fetch(url)
            .then((response) => {
            return response.json() })
            .then((data)=>{
                const {buy, sale} = data[0];
                console.log(data[0]);
                this.setState({
                    USD_buy: buy,
                    USD_sale: sale
                })
            })
}
    componentDidMount() {
        this.getCurrency();
    }
   
    changeHandler = ({target:{value, name}}) => {
        const {USD_buy, USD_sale} = this.state;
        this.setState({
            [name]: value
         })
         if (name === 'UAH') {
            this.state.USD = value / USD_sale;
         } else {
            this.state.UAH = value * USD_buy;
         }       
    }

    render() {
        const {USD, UAH, USD_buy, USD_sale} = this.state;
        //const roundBuy = roundBuy.toFixed(2);
        //console.log(roundBuy);
        //тут не получилось округление сделать
        return (
            <>
            <div className='bg'></div>

            <section className='box'>
            <h3 className='header'>Курс валюты</h3>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Покупка</th>
                    <th>Продажа</th>
                </tr>	
                </thead>	
                
                <tbody>	
                <tr>
                    <td>USD</td>
                    <td className='UAH-header'>UAH</td>
                    <td></td>
                    <td>{USD_buy}</td>
                    <td>{USD_sale}</td>
                </tr>
                </tbody>
            </table>
            </section>

            
            <form className='form-wrapper box'>
                <label> UAH
                    <input 
                    className='input'
                    type='text' 
                    onChange={this.changeHandler} 
                    name='UAH' 
                    value={UAH}/>
                </label>

                <label> USD
                    <input 
                    className='input'
                    type='text' 
                    onChange={this.changeHandler} 
                    name='USD' 
                    value={USD}/>
                </label>
            </form>

            </>
        )
    }

}

export default ConverterApi;