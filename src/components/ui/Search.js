import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text,setText] = useState('')

  const onChange = (query) => {
    setText(query)
    getQuery(query)
  } 
  return (
    <section >
      <form className='search'>
        <input
          type='text'
          className='form-control'
          value={text}
          placeholder='Search countries' 
          spellCheck='false'
          onChange={(e) => onChange(e.target.value)}
          />
      </form>
    </section>
  )
}

export default Search
