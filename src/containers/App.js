import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';

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
    const {robots, searchfeild} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfeild.toLowerCase());
    })

    return !filteredRobots.length ?
        (
           <div className="tc">
            <h1 className="f1">Awesome-Robofriends</h1>
            <SearchBox searchChange= {this.onSearchChange}/>
            <p>Sorry no username found</p>
          </div>
        )
        :
        (
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
export default App;
