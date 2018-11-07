import React from 'react';
import PostData from '../db.json';
import {Link} from 'react-router-dom';
//import PostsItem from 'posts_item';

const Posts = (props) =>{
    //console.log(" props.posts",  PostData)
    const postData =  PostData.map((postItem) => {  
        return (
                <div key={postItem.id} className='post_item'>
                    <h4><Link to={'/posts/'+postItem.id}>{postItem.title}</Link></h4>
                    <p>{postItem.feed}</p>
                </div>
        )
    })

    return(
        <div> 
            {postData}
        </div>
        )
}

export default Posts;