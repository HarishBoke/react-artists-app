import React from 'react';
import {Link} from 'react-router-dom';


const ArtistsList = (props) => {
    //console.log("ArtistsList", allArtists);
    
    const list = ({allArtists}) => {
        if(allArtists){
            return allArtists.map((item)=>{
                    let style = {
                        background: `url('/images/covers/${item.cover}.jpg') no-repeat`
                    };
    
                  return (
                    <Link key={item.id} to={`/artist/${item.id}`} className="artist_item" style={style}>
                            <div>{item.name}</div>
                    </Link>         
                  )
                })
            
        }
    }
    
    return (
        <div className="artists_list">
            <h3>Browse the artists</h3>
            {list(props)}
        </div>
    )
}

export default ArtistsList;