import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//route 
import { BrowserRouter, Route, Link} from 'react-router-dom';


//COMPONETS
import Header from './components/header';
import NewsList from './components/news_list';
import Posts from './components/posts';
import PostsItem from './components/posts_item';
import Profile from './components/profile';

// Temp JSON DB
import JSON from './db.json';


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            news: JSON,
            filtered: JSON,
            posts: JSON
        };
    }

    filterNews(keywords) {
        //console.log(keywords);
        let filtered = this.state.news.filter((item)=> {
            return item.title.indexOf(keywords) > -1;
        })
        //console.log(filtered);
        this.setState({filtered: filtered});
    }

    render(){
        return(
            <div>
                <Header newsSearch={(keywords) => this.filterNews(keywords)} />
                <NewsList news={this.state.filtered} />
            </div>
        )
    }
}


// const App = () => {
//     console.log(JSON);
//     return (
//         <div>
//         <Header/>
//         <h1>Welcome Harish</h1>
//         </div>
//     );
// }

// before route rendering
//ReactDOM.render(<App />, document.querySelector("#root"))


// with route rendering
ReactDOM.render(
    <BrowserRouter>
    <div>
    {/* <Header newsSearch={(keywords) => this.filterNews(keywords)} />  NOTE: once scope issue solve can add here as result search doesn't find scope  */}

                        <ul className="header-navigation">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                        
        <Route exact path="/" component={App}></Route>
        {/* <Route exact path="/" component={AppWithRouting}></Route> */}
        <Route exact path="/posts" component={Posts}></Route>
        <Route path="/posts/:id" component={PostsItem}></Route>
        <Route path="/profile" component={Profile}></Route>
    </div>
    </BrowserRouter>, document.getElementById("root"));