import React from 'react'
import TextContainer from './TextContainer'
import CardContainer from './CardContainer'

// container for entire app
const Container = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center align-middle space-y-6'>
      <TextContainer />
      <CardContainer />
    </div>
  )
}

export default Container