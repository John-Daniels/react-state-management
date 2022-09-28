import React from "react"
import { useSelector } from "react-redux"
import "./menulink.css"

export default function MenuLink({ icon, text }) {
  const name = useSelector((state) => state.user.profile.name)

  return (
    <div className='menulink'>
      {icon}
      <span className='menuLinkText'>{text}</span>
      <span className='menuLinkTextName'>
        {text === "Logout" && `( ${name} )`}
      </span>
    </div>
  )
}
