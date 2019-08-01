import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            searchField : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( data => this.setState({robots : data}) )
    }

    onSearchChange = (event) =>  {
        this.setState( {searchField : event.target.value});   

    }
    render(){
        const {robots, searchField} = this.state;
        const filteredRobot = robots.filter( (robot) => {

            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        } ) 
        if(robots.length < 0)
            return <h1>Loading</h1>
        else {
            return(
                <div className = 'tc'>
                    <h1>RoboFriends</h1>                   
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <CardList robots = {filteredRobot}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;