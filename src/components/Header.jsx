import React from 'react'
import "../css/Homepage.css"
const Header = () => {
  return (
    <header className='header'>
        <div className='user-info'>
          <a href="/">
            {/*<img src="" alt="" srcset="" />*/}
            <h3>EDYODA</h3>
          </a>
          <div>
              <span>Hi Learner!</span>
              {/* <img src="" alt="" srcset="" /> */}
          </div>
        </div>
      </header>
  )
}

export default Header