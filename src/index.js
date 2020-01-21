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
            <h2>It is {seconds()} seconds.</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

let seconds = (
    function () {
        let count = 0;
        return function () {
            return count++;
        }
    }
)();

setInterval(tick, 1000);