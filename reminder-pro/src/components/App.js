import React, {Component} from 'react';
import '../App.css';
//import {FormGroup,FormControl,Button, InputGroup, Glyphicon} from 'react-bootstrap';

export default class App extends Component {
    render(){
        return (
            <div className="App">
                <div className="title">
                Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                        />
                    </div>
                    <button className="btn btn-success">Add reminder</button>
                </div>
            </div>
        )
    }
}