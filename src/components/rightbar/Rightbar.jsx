import { ArrowDropDown } from "@mui/icons-material"
import React from "react"
import Recommendation from "../recommendation/Recommendation"
import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <Recommendation type='user' />
        <Recommendation type='popular' />
        <Recommendation type='editor' />
        <button className='rightButton'>
          See More
          <ArrowDropDown />
        </button>
      </div>
    </div>
  )
}
