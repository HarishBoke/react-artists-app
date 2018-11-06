import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//COMPONETS
import Header from './components/header';
import NewsList from './components/news_list';


// Temp JSON DB
import JSON from './db.json';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            news: JSON,
            filtered: JSON
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
ReactDOM.render(<App />, document.getElementById('root'));