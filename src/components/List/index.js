import React from 'react';

const FlexContainer = (props) => {
    const {flexDirection, alignItems, color} = props;
    const inlineStyles = {
        display: 'flex',
        flexDirection: flexDirection,
        alignItems: alignItems,
        color: color
    }
    

    return (
        <>
        <div style={inlineStyles}>
        <div>
            Text1
        </div>
        <div>
            Text2
        </div>
        </div>
        </>
       
    );
}

export default FlexContainer;
