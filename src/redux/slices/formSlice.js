import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  email: '',
  phone_number: '',
  nickname: '',
  name: '',
  surname: '',
  sex: '',
  advantages: [],
  checkboxes: [],
  number: '',
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
    setNickName(state, action) {
      state.nickname = action.payload
    },
    setName(state, action) {
      state.name = action.payload
    },
    setSurname(state, action) {
      state.surname = action.payload
    },
    setSex(state, action) {
      state.sex = action.payload
    },
    setAdvantages(state, action) {
      state.advantages = action.payload
    },
    setCheckboxes(state, action) {
      state.checkboxes = action.payload
    },
    setNumber(state, action) {
      state.number = action.payload
    }
  }
})

export const {setPhoneNumber, setEmail, setNickName, setName, setSurname, setSex, setAdvantages, setCheckboxes,setNumber} = FormSlice.actions
export default FormSlice.reducer