import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList:[]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo:(state, action) => {
      state.todoList.push(action.payload)
    },
    reset:(state,action)=>{
      const { id } = action.payload;
      state.todoList = state.todoList.filter(item => item.id !== id)
    }
  }
});

export const { saveTodo, reset } = todoSlice.actions

export const selectTodoList = (state: { todos: { todoList: any; }; }) => state.todos.todoList

export default todoSlice.reducer
