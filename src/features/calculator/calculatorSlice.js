import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    addition: (state, action) => {
      const { num1, num2 } = action.payload;
      state.value = num1 + num2;
    },
    substraction: (state, action) => {
      const { num1, num2 } = action.payload;
      state.value = num1 - num2;
    },
    multiplication: (state, action) => {
      const { num1, num2 } = action.payload;
      state.value = num1 * num2;
    },
    division: (state, action) => {
      const { num1, num2 } = action.payload;
      state.value = num1 / num2;
    },
    reset: (state)=>{
        state.value=0;
    }
  },
});

export const { addition , substraction ,multiplication ,division ,reset} = calculatorSlice.actions;
export default calculatorSlice.reducer;
