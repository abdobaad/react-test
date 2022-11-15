import React, { useEffect, useState } from 'react';
import axios from "axios";
import PostItem from './PostItem';
import "./index.css";

const Posts = () => {
    const [Posts,setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{ 
        fetchPosts();
    },[]);

    const fetchPosts = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(data)
        setIsLoading(false)
    };

    return (
        <div className="posts_container container">
            <h1>Posts</h1>
            <div className="posts_grid"> 
                {
                    !isLoading 
                    ? 
                        Posts ? 
                            Posts.map((post)=>(
                             <PostItem key={post.id} post={post} />
                            )) :
                         <h1>Sorry! there is no post yet</h1>
                    :

                    [1,2,3,4,5,6].map((i)=>(
                        <div key={i} className="pulseLoader"></div>
                    )) 
                } 
            </div>
        </div>
    );
};

export default Posts;