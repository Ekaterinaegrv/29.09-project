import React from 'react';


function Toggler(props) {

    const clickHandler = () => {
        props.changeParentState()
    }

    return (<button onClick={()=>clickHandler()}>{props.buttonText}</button>)
}


// class Toggler extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             on: true
//         }
//     }

//       clickHandler() {
//         // this.setState({
//         //     on: !this.state.on
//         // })

//         this.props.changeParentState();

//     }

//     render() {
//         console.log(this.props)
//         return (<button onClick={()=>this.clickHandler()}
//         >{this.state.on ? 'On' : 'Off'}</button>)
//     }
// }

export default Toggler;