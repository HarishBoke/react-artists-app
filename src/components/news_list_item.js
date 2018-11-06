import React from 'react';

// traditional way
// const NewsListItem = (props) => {
//     //console.log(props);
//     return(
//         <div key={props.item.id}>
//             <h3>{props.item.title}</h3>
//             <p>{props.item.feed}</p>
//         </div>
//     )
// }


// with ES6 Destructing
const NewsListItem = ({item}) => {
    // desctucting direct access item from props 
    return(
        <div className='news_item'>
            <h3>{item.title}</h3>
            <p>{item.feed}</p>
        </div>
    )
}
export default  NewsListItem;