
import React from 'react'
import { Link } from "react-router-dom"

const More = () => {
  return (
    <div>
      <h1>Know More</h1>
        <div className="container">
          <Link className='btn btn-warning' to="/">Home</Link>
        </div>
    </div>
  )
}

export default More