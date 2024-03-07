import React from 'react'

interface SwitchButtonProps {
  page: number
  setPage: (page: number) => void
}

const SwitchButton: React.FC<SwitchButtonProps> = ({page, setPage}) => {

  return (
    <div className='flex space-x-2'>
      <button className='shadow-lg px-1 text-xl' onClick={() => setPage(page - 1)}>{'<'}</button>
      <button className='shadow-lg px-1 text-xl' onClick={() => setPage(page + 1)}>{'>'}</button>
    </div>
  )
}

export default SwitchButton