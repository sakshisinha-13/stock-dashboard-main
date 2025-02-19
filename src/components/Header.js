import React from 'react'
import Search from './Search'
import ThemeIcon from './ThemeIcon'

function Header({name}) {
  return (
    <>
    <div className='xl:px-32'>
      <h1 className='text-5xl'>{name}</h1>
      <Search/>
    <ThemeIcon/>
    </div>
    </>
  )
}

export default Header
