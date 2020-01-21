//If you aren’t using class fields syntax as used in toggle.js, you can use an arrow function in the callback:

import React from 'react'

class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
      </button>
        );
    }
}

export default LoggingButton;