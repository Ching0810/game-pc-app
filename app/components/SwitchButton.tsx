import React from 'react'

interface SwitchButtonProps {
  page: number
  setPage: (page: number) => void
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({page, setPage, hasNextPage, hasPreviousPage}) => {

  return (
    <div className='flex space-x-2'>
      <button className='shadow-lg px-1 text-xl' onClick={() => setPage(page - 1)} disabled={!hasPreviousPage}>{'<'}</button>
      <button className='shadow-lg px-1 text-xl' onClick={() => setPage(page + 1)} disabled={!hasNextPage}>{'>'}</button>
    </div>
  )
}

export default SwitchButton