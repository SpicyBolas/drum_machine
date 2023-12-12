import { createSlice } from '@reduxjs/toolkit';

const initialState = {text: '',power: false, volume: 0};

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        padPress (state,action) {
            state.text = action.payload;
        },
        powerToggle (state) {
            state.power = !state.power;
        },
        resetDisplay(state) {
            state.text = '';
        },
        changeVol(state,action){
            state.volume = action.payload;
        },
    },
})

export const { padPress, powerToggle, resetDisplay, changeVol } = displaySlice.actions
export default displaySlice.reducer