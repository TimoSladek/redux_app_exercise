import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Tianna Jenkins' },
    { id: '2', name: 'Kevin Grant' },
    { id: '3', name: 'Madison Price' }
]


const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(newAuthor) {
                return {
                    payload: {
                        id: nanoid(),
                        name: newAuthor
                    }
                }
            }
        }
    }
})


export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;
export const selectUsers = state => state.users;