import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import React from 'react'
import "./NextBtn.css"

export const NextBtn = (props) => {
    const {onClick}=props
  return (
    <div className="arrowForwordBtn" onClick={onClick}>
        <ArrowForwardIos/>
    </div>
  )
}
