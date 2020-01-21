import React from 'react'

class Reservation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        var target = event.target;
        var value = target.type == "checkbox" ? target.checked : target.value;

        this.setState({
            [target.name]: value
        });
    }

    render() {
        return (
            <form>
                <div>
                    <label>
                        Is Going:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Number Of Guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
            </form>
        );
    }
}

export default Reservation;