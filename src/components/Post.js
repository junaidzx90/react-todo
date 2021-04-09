import React from 'react';
import './post.css';
import { Delete, Edit } from '@material-ui/icons';

function Post({name, content}) {
    return (
        <div className="post">
            <span className="post__edit"><Edit /></span>
            <span className="post__del"><Delete /></span>

            <div className="post_content">
                <small>{ name }</small>
                <p>{ content }</p>
            </div>        
        </div>
    )
}

export default Post
