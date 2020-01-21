import React from 'react'

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    user = {
        id: 1,
        name: 'Bijay',
    }

    deleteUser(e, id) {
        console.log(e); //For First Button this print event args and for second button this print id
        console.log(id); //For First Button this print Id and for second button this print event args
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.deleteUser(e, this.user.id)}>Delete {this.user.id}</button>
                <button onClick={this.deleteUser.bind(this, this.user.id)}>Delete {this.user.id}</button>
            </div>
        );
    }
}

export default UserInfo;