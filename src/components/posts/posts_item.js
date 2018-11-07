import React from 'react';


const PostsItem = (props) => {
    console.log(props)
    return (
        <div> 
             <h1>Item {props.match.params.id}</h1>    
        </div>
    )
}

export default PostsItem;