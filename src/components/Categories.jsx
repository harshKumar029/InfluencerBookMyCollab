import React from 'react'

const Categories = ({ title, bgColor }) => {
  return (
    <div 
    className="w-64 h-36 rounded-xl shadow-lg p-4 flex items-center justify-center text-center text-white font-bold"
    style={{ backgroundColor: bgColor }}
  >
    {title}
  </div>
  )
}

export default Categories