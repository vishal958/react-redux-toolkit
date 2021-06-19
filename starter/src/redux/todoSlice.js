import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice(
    {
        name: 'todos',

        initialState: [],

        reducer: {
            addToDo: (state, action) => {
                const todo = {
                    id: new Date(),
                    title: action.payload.title,
                    completed: false
                }
                state.push(todo)
            },
            toggleComplete: (state, action) => {
                const index = state.findIndex((todo) => todo.id === action.payload.id)
                state[index].completed = action.payload.completed
            },
            deleteTodo: (state, action) => {
                return state.filter((todo) => todo.id !== action.payload.id);
            },
        }
    }
)
export const { addToDo, toggleComplete, deleteTodo } = todoSlice.actions
export default todoSlice.reducer