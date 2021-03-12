import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
  return (
    <section>
      <h1 style={{textAlign:"center",color:"white",marginTop:'10px'}}>Created by Burak Orkmez</h1>
      <img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt='spinner'></img>
    </section>
  )
}

export default Spinner
