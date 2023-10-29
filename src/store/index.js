// import { createStore } from "redux";
// const reducerFn = ((state={counter:0}, action)=>{

// //React reducer functions can only be synchronous functions
// //Not mutate the original state

// if(action.type=== "INC"){
// return ({counter: state.counter + 1})
// }
// else if(action.type === "DEC"){
//     return ({counter: state.counter - 1})
// }
// else if(action.type==='ADDBY'){
//     return({counter:state.counter+action.payload})
// }
// else{
//     return state;
// }

// })
// const store = createStore(reducerFn);
// export default store;
import { configureStore, createSlice} from '@reduxjs/toolkit';
const conuterSlice = createSlice({
    name: 'counter',
    initialState:{counter:0},
    reducers: {
        increment(state, action){
            state.counter++;
        },
        decrement(state, action){
            state.counter--;
        },
        addby(state, action){
            state.counter+= action.payload;
        }
    }

})
export const actions= conuterSlice.actions;
const store= configureStore({
    reducer: conuterSlice.reducer
})
export default store;