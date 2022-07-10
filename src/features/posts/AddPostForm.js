import React, { useState } from "react";
import { postAdded } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { userAdded } from "../users/usersSlice";

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [newUser, setNewUser] = useState('');

    const dispatch = useDispatch();

    const users = useSelector(state => state.users);

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value);
    const onUserChanged = e => setUserId(e.target.value);
    const onNewUser = e => setNewUser(e.target.value);

    const addNewUser = () => {
        const oldUser = users.find(user => user.name === newUser)

        if(newUser && !oldUser){
            dispatch(userAdded(newUser));
            setNewUser('');
        }
        else{
            alert('User already exist!');
        }
    }

    const onSavePostClicked = () => {
        if(title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    const canSave = Boolean(title) && Boolean(content);
    const canAdd = Boolean(newUser);

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a new Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text" 
                    name="postTitle"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postUser">User:</label>
                <select id="postuser" value={userId} onChange={onUserChanged}>
                    <option value="" />
                    {userOptions}
                </select>
                <label htmlFor="postContent">Post Content:</label>
                <input 
                    type="text" 
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    Save Post
                </button>
                <div>
                    <label htmlFor="newuser">New User:</label>
                    <input 
                        type="text"
                        name="newUser"
                        id="newUser"
                        value={newUser}
                        onChange={onNewUser}
                    />
                    <button type="button" onClick={addNewUser} disabled={!canAdd}>
                        Add a new User
                    </button>
                </div>
            </form>
        </section>
    )
}