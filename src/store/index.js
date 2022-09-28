import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/user.reducer"

export default configureStore({
  reducer: {
    user: userReducer,
  },
})
