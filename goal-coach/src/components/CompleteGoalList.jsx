import React, { Component } from 'react';

import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';
import {connect} from 'react-redux';

class CompleteGoalList extends Component {

    clearCompleted(){
        completeGoalRef.set([]);
    }

    componentDidMount(){
        completeGoalRef.on('value', snap =>{
            let completeGoals = [];

            snap.forEach(completeGoal =>{
                const {email,title} = completeGoal.val();
                completeGoals.push({email,title});
            });

            console.log('completeGoal',completeGoals);
            this.props.setCompleted(completeGoals);
        })
    }

    render(){
        console.log('this.props',this.props)
        return(
            <div>
                {
                    this.props.completeGoals.map((completeGoal,index) => {
                        const {title,email} = completeGoal;
                        return (
                            <div key={index}>
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <button className="btn btn-primary" onClick={() => this.clearCompleted()}> Clear All</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log('state',state)
    const {completeGoals} = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);