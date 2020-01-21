import React from 'react'

export const elementOne = (
    <h1 className="greeting">
        Hello, World!
    </h1>
);

export const elementTwo = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, World!'
);

// Note: this structure is simplified of above code
const elementThree = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};