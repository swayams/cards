import * as React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import New from '../create/New';
import App from '../stack/App';



const Home = () => (
    <Router>
        <div>
            <ul> 
                <li><Link to="/"> Cards </Link></li>
                <li><Link to="/create"> Create </Link></li>
                <li><Link to="/wip"> WIP </Link></li>            
            </ul>
            <Route path="/" exact={true} component={App} />
            <Route path="/create" exact={true} component={New} />
        </div>
    </Router>
)

export default Home