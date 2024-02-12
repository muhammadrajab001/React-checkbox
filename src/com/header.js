import React from 'react'
import com  from './header.css'
const Header = () => {
  return (
    <div className='time_week'>
<input
  type="datetime-local"
  className="meeting-time"
  name="meeting-time"
  value="2018-06-12T19:30"
  min="2018-06-07T00:00"
  max="2018-06-14T00:00" />
<input
className="meeting-time"
  type="time"/>
<input
className="meeting-time"
  type="week"/>
    </div>

  )
}

export default Header
