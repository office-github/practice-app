import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            gender: 'Male',
            multiple: ['']
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleMutliple = this.handleMutliple.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value.toUpperCase()
        });
    }

    handleDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleGender(event) {
        this.setState({
            gender: event.target.value
        });
    }

    handleMutliple(event) {
        this.setState({
            multiple: Array.from(event.target.selectedOptions, (item) => item.value)
        });
    }

    handleSubmit(event) {
        alert('Name: ' + this.state.name + '\nDescription: ' + this.state.description + `\nGender: ${this.state.gender}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name: <input type="text" tabIndex="1" value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Description: <textarea tabIndex="2" placeholder="There is some text" value={this.state.description} onChange={this.handleDescription} />
                    </label>
                </div>
                <div>
                    <select value={this.state.gender} onChange={this.handleGender}>
                        <option value="0">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <select multiple={true} value={this.state.multiple} onChange={this.handleMutliple}>
                        <option value="0">Select Multiple</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <input type="submit" tabIndex="3" value="Submit" />
            </form>
        );
    }
}

export default NameForm;