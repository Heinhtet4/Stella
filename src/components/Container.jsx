import React from 'react'


const Container = ({children,className}) => {
  return (
    <div className={`w-full px-2 md:max-w-[85%] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container