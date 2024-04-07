import React from 'react'

const ErrorText = ({children}) => {
  return (
    <div style={{color:'red'}}>
      {children}
    </div>
  )
}

export default ErrorText
