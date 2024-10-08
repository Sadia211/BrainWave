import React from 'react'

const Tagline = ({className,children}) => {
  return (
    
    <div className={`tagline flex items-center ${className||""}`}>
     <div className='mx-3 texxt-n-3'>{children}</div>
    </div>
  )
}

export default Tagline
