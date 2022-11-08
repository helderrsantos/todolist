import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface ITask {
  key: string;
  item: string;
  id: string;
  name: string;
  done: boolean;
}
interface ITodoReducer {
  todoList: ITask[];
}

const initialState: ITodoReducer = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action: PayloadAction<ITask>) => {
      state.todoList.push(action.payload);
    },
    markTaskAsDone: (state, action: PayloadAction<ITask>) => {
      const tasks = state.todoList.map(task => {
        if (task.id === action.payload.id) {
          return { ...task, done: !task.done };
        }
        return { ...task };
      });

      state.todoList = tasks;
    },
    reset: (state, action: PayloadAction<ITask>) => {
      state.todoList = state.todoList.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const { saveTodo, markTaskAsDone, reset } = todoSlice.actions;

export default todoSlice.reducer;
