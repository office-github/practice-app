import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

/**
 * You can also use an ES6 class to define a component:
 * These two components are equivalent from React’s point of view.
 * */

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

export const element = <Welcome name="Sara" />