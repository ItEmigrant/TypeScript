import React from 'react';
type propsOnOFType ={
    button:boolean
}
export const OnOff = (props:propsOnOFType) => {


    // eslint-disable-next-line no-lone-blocks
    {
        if (props.button) {
            return <div id='SQUARE'>ON</div>
        } else {
            return <div id='SQUARE1'>OF</div>
        }
    }

};

