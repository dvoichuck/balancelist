import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getListFromLocalStorage, setListToLocalStorage } from './listApi';

export interface listState {
    value: listItem[];
}

export interface listItem {
    pkh: string,
    balance: number
};


const initialState: listState = {
    value: getListFromLocalStorage(),
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<listItem>) => {
            state.value.push(action.payload);
            setListToLocalStorage(state.value)
        },
        deleteItemByIndex: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
            setListToLocalStorage(state.value);
        },
    },

});

export const { addItem, deleteItemByIndex } = listSlice.actions;

export const selectList = (state: RootState) => state.list.value;

export default listSlice.reducer;
