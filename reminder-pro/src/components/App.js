import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addReminder } from '../actions';

//import {FormGroup,FormControl,Button, InputGroup, Glyphicon} from 'react-bootstrap';
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }

    addReminder(){
        console.log('this state',this);
    }

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
                            onChange={event => this.setState({text: event.target.value})}
                        />
                    </div>
                    <button className="btn btn-success"
                        onClick={() => this.addReminder()}
                    >
                        Add reminder
                    </button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({addReminder},dispatch);
}


export default connect(null,mapDispatchToProps)(App);