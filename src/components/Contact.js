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
        axios({
          method: "POST",
          url: "https://jojoliu-backend-v2.herokuapp.com/send",
        //   url: "http://localhost:3002/send",
          data: this.state,
        }).then((response) => {
          if (response.data.status === "success") {
            alert("Message sent.");
            this.resetForm();
          } else {
            alert("Message failed to send:", response.data.status);
          }
        });
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
                        <label className="contact-label" htmlFor="myName">
                            <span className="required">*</span> Name
                        </label>
                        <input 
                            autoComplete="on"
                            name="myName"
                            className="form-control"
                            id="myName"
                            onChange={this.onNameChange.bind(this)}
                            required
                            type="text" 
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label className="contact-label" htmlFor="myEmail">
                            <span className="required">*</span> 
                            Email address
                        </label>
                        <input 
                            name="myEmail"
                            autoComplete="on"
                            className="form-control" 
                            id="myEmail"
                            onChange={this.onEmailChange.bind(this)}
                            required
                            type="email" 
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label className="contact-label" htmlFor="message"><span className="required">*</span> Message</label>
                        <textarea 
                            className="form-control" 
                            id="message"
                            onChange={this.onMessageChange.bind(this)}
                            required
                            rows="5"
                            value={this.state.message}
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