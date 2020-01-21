/**
 * Components can refer to other components in their output.
 * For example, we can create an App component that renders Welcome many times:
 * */

import React from 'react'

function Welcome(props) {
    return <h1>Hello, World!</h1>;
}

export function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Bijay" />
            <Welcome name="Suresh" />
            <Welcome name="Regan" />
        </div>
    );
}