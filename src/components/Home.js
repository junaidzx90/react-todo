import { Save } from '@material-ui/icons';
import './home.css';
import {React, useState, useEffect} from 'react';
import Post from './Post';
import firebase from '../firebase'

function Home() {
    const userName = 'Md Junayed';
    const [newPost, setPost] = useState('');
    const [postList, setList] = useState();
    

    const storePost = (e) => {
        setPost(e.target.value);
    }

    const savePostData = () => {
        const posts = firebase.database().ref("Posts");
        const post = {
            userName,
            newPost,
            complete: false
        }
        posts.push(post);
        setPost("");
    }

    useEffect(() => {
        const posts = firebase.database().ref("Posts");
        posts.on('value', (snapshot) => {
            const snapshots = snapshot.val();
            let posts = [];
            for (let id in snapshots) {
                posts.push(snapshots[id]);
            }
            setList(posts);
        });
    }, []);

    return (
        <div className="homePage">
            <div className="left__sidebar">
                This is sidebar
            </div>
            <div className="content__area">
                <div className="create__post">
                    <textarea onChange={ storePost } value={ newPost } autoComplete="off" className="post__input" />
                    <span onClick={savePostData} className="saveIcon"><Save/></span>
                </div>

                <h1 className="secion__title">😏Posts</h1>
                
                <div className="posts">
                    {postList ? postList.map((spost,index)=>{
                      return(<Post key={index} name={spost.userName? spost.userName : 'Unknown'} content={spost.newPost} />)
                    }): ''}
                </div>
            </div>
            
        </div>
    )
}

export default Home
