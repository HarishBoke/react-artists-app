import React, {Component} from 'react';
import Banner from './banner'
import ArtistsList from './artists_list'


const URL_ARTISTS = 'http://localhost:3003/artists';

class Artist extends Component{
    constructor(props){
        super(props);

        this.state ={
            artists: ''
        };
    }

    componentDidMount(){
        fetch(URL_ARTISTS, {
            method: 'GET'
        }).then(res=>res.json()).then(data=> {
            this.setState({
                artists:data
            })
        });
    }

    render(){
        return(
        <div>
                <Banner></Banner>
                <ArtistsList allArtists={this.state.artists} />
        </div>
        )
    }
}
export default Artist;