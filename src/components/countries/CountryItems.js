import React from 'react'
import CountryGrid from './CountryGrid'
import Spinner from '../ui/Spinner'
const CountryItems = ({items,isLoading}) => {
  {items.splice(190,1)}
  return isLoading ?  (<Spinner/>) :(
    <section className='cards'>
      
      {items.map(item => (
      <CountryGrid key={item.countryInfo._id} item={item} />
      ))}
      
    </section>
  )
}

export default CountryItems
