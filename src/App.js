import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfeild: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfeild: event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
    })
    

    if(filteredRobots.length === 0){
        return(
           <div className="tc">
            <h1 className="f1">AWESOME-ROBOFRIENDS</h1>
            <SearchBox searchChange= {this.onSearchChange}/>
            <p>Sorry no username found</p>
          </div>
        );
    }
    else{
      return(
         <div className="tc">
          <h1 className="f1">AWESOME-ROBOFRIENDS</h1>
          <SearchBox searchChange= {this.onSearchChange}/>
          <Cardlist robots={filteredRobots} />
        </div>
      );
    }

}
}
export default App;
