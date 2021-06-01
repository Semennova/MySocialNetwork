import profileReducer, { AddPostActionCreator, deletePost } from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: "Hi! How are you?", likeCount: 19}, 
        {id: 2, message: "It's my first post", likeCount: 30},
        {id: 3, message: "Hey you!!", likeCount: 30},
        {id: 4, message: "Ain't no sunshine when she's gone", likeCount: 30} 
    ]
};
it('post should be added', ()=> {
    let action = AddPostActionCreator('testing profile-reducer');

    let newState = profileReducer(state, action);

   expect(newState.posts[4].message).toBe('testing profile-reducer')
});

it('length is decremented after deleting', ()=> {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(3)
})