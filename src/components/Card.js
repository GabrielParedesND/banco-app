import React from 'react'

function Card({ children, style }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 border border-gray-200 p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition ${style}`}>
      {children}
    </div>  
  )
}

export default Card