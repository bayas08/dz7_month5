import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload
    },
    editTodo: (state, action) => {
      state.todos = action.payload
    },
    setDelete: (state, action) => {
      state.todos = action.payload
    },
    setDone: (state, action) => {
      state.todos = action.payload
    },
    setSearching: (state, action) => {
      state.todos = action.payload
    }
  }
})

export default todosSlice.reducer;
export const {setTodo, editTodo, setDelete, setDone, setSearching} = todosSlice.actions;
export const todoSelect = state => state.todoReducer;