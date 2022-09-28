import {
  updateSuccess,
  updateStart,
  updateError,
} from "../reducers/user.reducer"

export const updateUser = async (userData, dispatch) => {
  dispatch(updateStart())

  try {
    // const res = await fetch.put('http://localhost:8000/api/users/123/')
    // automate a api call session

    setTimeout(() => {
      dispatch(updateSuccess(userData))
    }, 5000)
  } catch (err) {
    dispatch(updateError())
  }
}
