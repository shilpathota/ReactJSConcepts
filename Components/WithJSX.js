import React from 'react';

const WithoutJSX = () => {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            {id:'myid',className:'div-class'},
            'This is simple functional Component'
            ));
}

export default WithoutJSX;