import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        const addYear = () => {
            this.setState({
                count: this.state.count + 1
            });
        }
        return(
            <div className='card border border-dark'>
                <h1>{firstName} {lastName}</h1>
                <h4>Age:{this.state.count}</h4>
                <h4>Hair Color:{hairColor}</h4>
                <button className='btn btn-outline-primary' onClick={addYear}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default Card;