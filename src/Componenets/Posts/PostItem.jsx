import React from 'react';

const PostItem = ({post}) => {
    return (
        <div id={`post_${post.id}`} className="post_element--container">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostItem;