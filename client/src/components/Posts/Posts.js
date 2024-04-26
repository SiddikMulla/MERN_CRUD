import React from 'react'
import Post from './Post/Post'

import useStyle from './style'
import { useSelector } from 'react-redux'
import posts from '../../reducers/posts'


const Posts = () => {
    const selector = useSelector((state) => state.posts )
    const classes = useStyle();

    console.log(posts);
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts
