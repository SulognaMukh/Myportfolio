import React from 'react'
import  LinkedInIcon  from '@material-ui/icons/LinkedIn'
import  WhatsApp  from '@material-ui/icons/WhatsApp'
import   '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
      <LinkedInIcon/>
      <WhatsApp/>
      </div>
      
    </div>
  )
}

export default Footer