import React, {Component} from 'react';
import { firebaseApp } from '../firebase';

import { Link } from 'react-router-dom';

export default class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            error:{
                message:''
            }
        }
    }

    signUp(){
        console.log(this.state)
        const { email,password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password).catch(err=>{
            console.log('error',err);
            this.setState({error:err});
        });
    }

    render(){
        return (
            <div className="form-inline" style={{margin:'5%'}}>
                <h2>Sign Up</h2>
                <div className="form-group" style={{display:'flex'}}>
                    <input
                        type="text"
                        placeholder="email"
                        className="form-control"
                        onChange={event => this.setState({email: event.target.value})}
                        style={{marginRight:'1%'}}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="form-control"
                        onChange={event => this.setState({password: event.target.value})}
                        style={{marginRight:'1%'}}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={() => this.signUp()}
                    >
                        Sign Up
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signin'}>Already a user ? Sign in indstead</Link></div>
            </div>
        )
    }
}