import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// router 
import {BrowserRouter, Route} from 'react-router-dom'

// import component for routing 

import Posts from './components/posts';
import Profile from './components/profile';

class AppWithRouting extends Component {
    render(){
        return(
            <div>App of Routing </div>
        );
    }
}

//ReactDOM.render(<AppWithRouting />, document.querySelector("#appRouting"))

ReactDOM.render(
    <BrowserRouter>
        <div>
        <Route exact path="/" component={AppWithRouting}></Route>
        <Route path="posts" component={Posts}></Route>
        <Route path="profile" component={Profile}></Route>
        </div>
    </BrowserRouter>
    ,document.getElementById("appRouting"));