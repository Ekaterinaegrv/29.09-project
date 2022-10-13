import React from 'react';
import ToDoItem from './Todoitem';
import ToDoForm from './ToDoInput';
import styles from './button.module.scss'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        const list = ['go to party', 'meet friends', 'have a walk'].map((text, index) => ({ id: index, text, isSelected: false }))
        this.state = {
            list
        }
    }

    onClick(id) {
        const { list } = this.state;
        const filtered = list.filter(elem => elem.id !== Number(id));
        this.setState({
            list: filtered
        })
    }

    


    renderLi() {
        const { list } = this.state;
        return list.map((obj) => 
        <ToDoItem 
        key={obj.id} 
        text={obj.text} 
        id={obj.id} 
        delCallback={(id) => this.onClick(id)} 
        className={obj.isSelected ? 'hightlight':null}/>)
    }

    sendData = (text) => {
        const {list} = this.state;

        const newObj = {
            id: list.length,
            text
            
       }
        this.setState({
            list: [...list, newObj]
       })
    }


    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.renderLi()}
                </ul>
                <ToDoForm sendDataToChild = {this.sendData}/>
                <button className={styles.button}>Follow me</button>
            </React.Fragment>
        )
    }
}
export default ToDoList