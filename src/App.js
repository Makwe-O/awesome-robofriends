import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { robots } from './robots';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfeild: ''
    }

  }

  componentDidMount(){
    this.setState({robots:robots});
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
            <h1 className="f1">Awesome-Robofriends</h1>
            <SearchBox searchChange= {this.onSearchChange}/>
            <p>Sorry no username found</p>
          </div>
        );
    }
    else{
      return(
         <div className="tc">
          <h1 className="f1">Awesome-Robofriends</h1>
          <SearchBox searchChange= {this.onSearchChange}/>
          <Scroll>
            <Cardlist robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
}
}
export default App;
