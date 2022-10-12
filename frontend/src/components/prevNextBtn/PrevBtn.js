import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew'
import React from 'react'
import "./PrevBtn.css"

export const PrevBtn = (props) => {
    console.log(props);
    const {onClick}=props

  return (
    <div  className="arrowBackBtn" onClick={onClick}>
        <ArrowBackIosNew />
    </div>
  )
}
