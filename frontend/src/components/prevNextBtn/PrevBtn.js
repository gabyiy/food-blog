import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew'
import React from 'react'
import "./PrevBtn.css"
import "./NextBtn.css"


export const PrevBtn = (props) => {
    console.log(props);
    const {onClick}=props

  return (
    <div  className="arrowForwordBtn" onClick={onClick}>
        <ArrowBackIosNew />
    </div>
  )
}
