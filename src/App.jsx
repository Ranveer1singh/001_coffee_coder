import React from 'react'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import WhereToBuy from './components/WhereToBuy/WhereToBuy'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Service/>
      <WhereToBuy/>
    </div>
  )
}

export default App