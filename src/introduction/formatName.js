import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Bijay',
    lastName: 'Yadav'
}

export const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);