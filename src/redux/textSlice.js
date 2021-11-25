import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataAsync = createAsyncThunk(
    'get/getDataAsync',
    async (paras, format) => {
        const res = await axios.get(
            `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`
        );
        return res.data;
    }
);

export const textSlice = createSlice({
    name: 'text',
    initialState: {
        text: '',
        paras: 4,
        format: 'text',
        isLoading: false,
        error: '',
    },
    reducers: {
        setParas: (state, action) => {
            state.paras = action.payload;
        },
        setFormat: (state, action) => {
            state.format = action.payload;
        },
    },
    extraReducers: {
        [fetchDataAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchDataAsync.fulfilled]: (state, action) => {
            // console.log(action.payload)
            state.text = action.payload;
            state.isLoading = false;
        },
        [fetchDataAsync.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export const textSelector = (state) => state.text.text;
export const parasSelector = (state) => state.text.paras;
export const formatSelector = (state) => state.text.format;

export const { setFormat, setParas } = textSlice.actions;

export default textSlice.reducer;
