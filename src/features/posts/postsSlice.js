import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const reactionEmoji = {
   thumbsUp: 0,
   hooray: 0,
   heart: 0,
   rocket: 0,
   eyes: 0
}

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!', date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: reactionEmoji},
    { id: '2', title: 'Second Post', content: 'More text', date: sub(new Date(), { minutes: 5 }).toISOString(), reactions: reactionEmoji}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId ) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId,
                        reactions: reactionEmoji
                    }
                }
            }
        },
        postUpdated: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if(existingPost) {
                existingPost.content = content;
                existingPost.title = title;
                existingPost.date = new Date().toISOString();
            }
        },
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        },
        postDeleted: (state, action) => {
            const { postId } = action.payload;
            let newId = 0
            state.find((post, idx) => {
                if(post.id === postId) {
                    newId = idx
                }
            })
            state.splice(newId, 1)
        }
    }   
})

export  const { postAdded, postUpdated, reactionAdded, postDeleted } = postsSlice.actions;
export default postsSlice.reducer;
export const selectPosts = state => state.posts;
export const selectPostById = (state,postId) => state.posts.find(post => post.id === postId);