import React from "react"
import Warning from "../warning/Warning"
import "./update.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { update } from "../../store/reducers/user.reducer"
import { updateUser } from "../../store/api/apiCalls"
import { CircularProgress } from "@mui/material"

export default function Update() {
  const user = useSelector((state) => state.user.profile)
  const loading = useSelector((state) => state.user.loading)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    await updateUser({ name, email }, dispatch)
  }

  return (
    <div className='update'>
      <div className='updateWrapper'>
        <h3 className='updateTitle'>Update Your Account</h3>
        <Warning />
        <button className='delete'>Delete Account</button>
        <div className='updateContainer'>
          <form onSubmit={onSubmit}>
            <div className='formItem'>
              <label>Profile Picture</label>
              <div className='profilePic'>
                <img
                  className='avatar'
                  src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <span className='change'>Change</span>
              </div>
            </div>
            <div className='formItem'>
              <label>Username</label>
              <input
                className='formInput'
                type='text'
                placeholder={user.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='formItem'>
              <label>Email</label>
              <input
                className='formInput'
                type='text'
                placeholder={user.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='formItem'>
              <label>Password</label>
              <input className='formInput' type='password' />
            </div>
            <button
              className='updateButton'
              disabled={loading}
              style={{ width: "70px" }}
            >
              {loading ? (
                <CircularProgress size={10} color='inherit' />
              ) : (
                "Update"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
