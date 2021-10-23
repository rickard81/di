import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            phone: '',
            email: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {

        let self = this.state;

        const payload = {
            firstName: self.firstName,
            lastName: self.lastName,
            age: self.age,
            phone: self.phone,
            email: self.email,
            description: self.description
        };
        
        fetch('https://kodeopgave1.dev.di.dk/api/employee/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .then(function (response) {
            return response.json()
        }).then(function (body) {
            
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>First name</label><br/>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br />
                <label>Last name</label><br />
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br />
                <label>Age</label><br />
                <input type="number" name="age" value={this.state.age} onChange={this.handleChange} /><br />
                <label>Phone</label><br />
                <input type="phone" name="phone" value={this.state.phone} onChange={this.handleChange} /><br />
                <label>Email</label><br />
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br />
                <label>Description</label><br />
                <textarea name="description" value={this.state.description} onChange={this.handleChange} /><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Form;