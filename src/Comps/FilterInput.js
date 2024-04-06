import React from 'react'

export default function FilterInput({column}) {
    const {filterValue, setFilter} = column;
  return (
    <div>
        <input 
        className='h-8'
        value={filterValue || ''}
        onChange={ e => {setFilter(e.target.value)}}/>
    </div>
  )
}
