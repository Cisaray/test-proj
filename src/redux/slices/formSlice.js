import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  email: '',
  phone_number: '',
}

const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers:{
    setEmail(state, action) {
      state.email = action.payload
    },
    setPhoneNumber(state, action) {
      state.phone_number=action.payload
    },
  }
})

export const {setPhoneNumber, setEmail} = FormSlice.actions
export default FormSlice.reducer