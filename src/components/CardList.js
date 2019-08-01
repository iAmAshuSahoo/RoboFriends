import React from 'react';
import Card from './Card';


class CardList extends React.Component{
   
    render(){
        const cardsArray = this.props.robots.map((user,i) => {
            return (
                <Card key = {i} 
                id = {this.props.robots[i].id} 
                name ={this.props.robots[i].name} 
                email = {this.props.robots[i].email} 
                />
            );
        } );
        return(
            <div>
                {cardsArray}
                
            </div>
        );
    }
}

export default CardList;