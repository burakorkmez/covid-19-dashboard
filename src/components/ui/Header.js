import React from 'react'

const Header = () => {
  return (
    <section className='hero'>
      <div className="header">
      <div style={{position:'relative'}}> 
      <div className="lds-ripple"><div></div><div></div></div>
      <div className="live">Live</div>
      </div>
      {/* ,right:'20px',top:'20px' */}
      <h1 class='header-h1'>COVID-19 DASHBOARD</h1>
      </div>
      

    </section>
  )
}

export default Header
