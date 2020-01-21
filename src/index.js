import React from 'react'
import ReactDOM from 'react-dom'
// import { element } from './introduction/printName'
// import { element } from './introduction/formatName'
// import { elementOne, elementTwo } from './introduction/identical'


/**
 * print Name
 */
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );


/**
 * Format Name
 */
// ReactDOM.render(
//     element,
//     document.getElementById("root")
// );

/**
 * Indentical Syntax For Creating React Elements
 */

// ReactDOM.render(
//     elementTwo,
//     document.getElementById('root')
// );

/**
 * Updating the Rendered Element: With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().
 */

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()} seconds.</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);