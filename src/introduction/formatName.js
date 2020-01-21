import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1> Hello, {formatName(user)} </h1>;
    }

    return <h1>Hello, Stranger</h1>
}

const user = {
    firstName: 'Bijay',
    lastName: 'Yadav'
}

export const element = (
    getGreeting(user)
);