import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  profile: {
    name: "john",
    email: "john@gmail.com",
  },
  loading: false,
  error: false,
}

const reducers = {
  update: (state, action) => {
    state.name = action.payload.name
    state.email = action.payload.email
  },

  updateStart: (state) => {
    state.loading = true
  },
  updateSuccess: (state, action) => {
    state.loading = false
    state.profile = action.payload
  },
  updateError: (state) => {
    state.error = true
    state.loading = false
  },
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
})

export const { update, updateStart, updateSuccess, updateError } =
  userSlice.actions
export default userSlice.reducer
