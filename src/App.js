import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home'
import Explore from './Explore'
import More from './More'
import Notifications from './Notifications'
import Lists from './Lists'
import Bookmarks from './Bookmarks';
import Profiles from './Profiles';
import Messages from './Messages';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}></Route>
        <Route path="/Explore" exact component={Explore}></Route>
        <Route path="/Notifications" exact component={Notifications}></Route>
        <Route path="/Messages" exact component={Messages}></Route>
        <Route path="/Bookmarks" exact component={Bookmarks}></Route>
        <Route path="/Lists" exact component={Lists}></Route>
        <Route path="/Profiles" exact component={Profiles}></Route>
        <Route path="/More" exact component={More}></Route>
      </Switch>
    </Router>
  );
}

export default App;
