import React, {Component} from 'react';
import './App.css';
import {FormGroup,FormControl,Button, InputGroup, Glyphicon} from 'react-bootstrap';

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            query:''
        }
    }

     componentDidMount(){


     }

    search(){
        console.log(this.state);
        const BASE_URL = `https://api.spotify.com/v1/search`;
        const FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
        console.log(FETCH_URL)
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                         placeholder="search an artist..."
                         type="text"
                         value={this.state.query}
                         onChange={e => {this.setState({query:e.target.value});}}
                         onKeyPress={e => {
                            //console.log(e.key)
                            if (e.key === 'Enter') this.search()
                        }}

                        />
                        <InputGroup.Addon onClick={() => this.search() }>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        );
    }
}