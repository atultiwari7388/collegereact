import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//! Create Date and Time
let currDate = new Date()
currDate=currDate.getHours()
let message = ''
const cssStyle ={}

if (currDate>=1 && currDate<12){
  message = "Good Morning"
  cssStyle.color = 'Green'
} else if(currDate>=12 && currDate<19){
  message = 'Good Afternoon'
  cssStyle.color = 'orange'
} else{
  message = 'Good Night'
  cssStyle.color = 'Black'
}

ReactDOM.render(
  <>
  <div>
      <h1>IICS College, <span style={cssStyle}>  {message}    </span></h1>
  </div>
  </>,
  document.getElementById('root')
)