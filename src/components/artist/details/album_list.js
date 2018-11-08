import React from 'react';

const AlbumList = ({albums}) => {
    //console.log(albums);
    const list = () => {
        if(albums){
            return albums.map((item, index)=> {
                return(
                        <img alt={item.title} key={index} src={`/images/albums/${item.cover}.jpg`} /> 
                )
            }); 
        }
    }
    return (
        <div className="albums_list">
            {list()}
        </div>
    )
}

export default AlbumList;