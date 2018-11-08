import React, {Component} from 'react';
import Header from "./header";

import AlbumList from './album_list';

class ArtistDetails extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            artists: ''
        };
       
    }
    
    componentDidMount(){
        const artistId = this.props.match.params.artistId;
        const URL_REQ =  `http://localhost:3003/artists/${artistId}`
        //console.log(URL_REQ);
        fetch(URL_REQ, {method:'get'}).then(res=>res.json().then(data=> {
            //console.log(data);
            this.setState({
                artists: data
            });
        }))
    }
    render(){
        
        return (
        <div>
                <Header />
                <div className="artist_bio">
                    <div className="avatar">
                         <span style={{background:`url(/images/covers/${this.state.artists.cover}.jpg) no-repeat`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artists.name}</h3>
                        <p className="bio_text">{this.state.artists.bio}</p>
                    </div>
                    <AlbumList albums={this.state.artists.albums} />
                </div>
        </div>
        )
    }
}

export default ArtistDetails;