import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/modules">
            <button>Modules</button>
          </Link>
          <Link to="/instructor">
            <button>Instructor</button>
          </Link>
        </nav>
  )
}

export default Nav