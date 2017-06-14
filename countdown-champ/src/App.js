import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form,FormControl,Button} from 'react-bootstrap';

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }

    changeDeaaline(){
        this.setState(function (prevState,props) {
            return {
                deadline: prevState.newDeadline
            }
        });
    }

    render(){
        return (
            <div className="App">
                <div className="App-title">Countdown  to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline >
                    <FormControl className="Deadline-input" type="text" placeholder="new date" onChange={ event => this.setState({newDeadline: event.target.value}) } />
                    <Button onClick={ () => this.changeDeaaline() }>Submit</Button>
                </Form>
            </div>
        )
    }
}