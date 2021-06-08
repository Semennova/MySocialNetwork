
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../assets/FormControls/FormControls';
import { required, maxLengthCreator } from '../../../utils/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts =(props)=> {
   
    console.log('render')
    let postsElement = props.posts
    .map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount} />);


    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
<div className={s.postsBlock}>
     <h3>My posts</h3> 
      <div>
          <AddPostFormRedux onSubmit={addNewPost}/>
      </div>
        <div>
            {postsElement}
  
        </div>
</div>
        )
    }  


const maxLength10 = maxLengthCreator(10)
 

const AddPostForm = (props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
             <Field component={Textarea} name='newPostText' placeholder="What's new?" validate={[required, maxLength10]} />
            <button className={s.btn}>Add Post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'newPostText'})(AddPostForm)


export default MyPosts;

