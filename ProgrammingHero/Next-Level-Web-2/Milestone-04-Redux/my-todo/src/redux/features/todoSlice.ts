import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        todos: []   
    },
    reducers: {
        // addTodo: (state, action) => {
        //     state.todos.push(action.payload)
        // },
        // deleteTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        // }
    }
})

export default todoSlice.reducer;