import React from 'react'
import { DataItem } from './CardContainer'

interface SwitchButtonProps {
  page: number
  setPage: (page: number) => void
  currentData: DataItem[]
}

const SwitchButton: React.FC<SwitchButtonProps> = ({page, setPage, currentData}) => {
  function handleNext() {
    if (currentData.length <= 3) {
      return
    }
    setPage(page + 1)
  }

  function handlePrev() {
    if (page < 1) {
      return
    }
    setPage(page - 1)
  }

  return (
    <div className='flex space-x-2'>
      <button className='shadow-lg px-1 text-xl' onClick={handlePrev}>{'<'}</button>
      <button className='shadow-lg px-1 text-xl' onClick={handleNext}>{'>'}</button>
    </div>
  )
}

export default SwitchButton