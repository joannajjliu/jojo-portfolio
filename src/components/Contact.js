import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onNameChange(e) {
        this.setState({name: e.target.value})
    }

    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

    onMessageChange(e) {
        this.setState({message: e.target.value})
    }

    resetForm() {
        this.setState({name: '', email: '', message: ''})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        // console.log(window.location.href);
        axios({
            method: "POST",
            url:'https://jjliu-portfolio-backend.herokuapp.com/send',
            data: this.state
        }).then((response) => {
            if (response.data.status === "success") {
                alert("Message sent.");
                this.resetForm();
            } else {
                alert("Message failed to send:", response.data.status);
            }
        })
    }

    render() {
        return (
            <section id="contact" className="contact-section">
                <h1>Contact</h1>
                {/* {console.log(`${window.location.href}send`)} */}
                <form id="contact-form" 
                    onSubmit={this.handleSubmit.bind(this)} 
                    method="POST"
                >
                    <div className="form-group">
                        <label className="contact-label" htmlFor="name"><span className="required">*</span> Name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="name"
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="contact-label" htmlFor="exampleInputEmail1"><span className="required">*</span> Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            aria-describedby="emailHelp"
                            id="email"
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="contact-label" htmlFor="message"><span className="required">*</span> Message</label>
                        <textarea 
                            className="form-control" 
                            rows="5"
                            id="message"
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)}
                            required
                        >    
                        </textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="contact-button card-body"
                        disabled={this.state.name === '' || this.state.email === '' || this.state.message === ''}
                    >
                        Submit
                    </button>
                </form>
            </section>
        );
    }
}