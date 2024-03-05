'use client'
import React, {useState, useEffect} from 'react'
import Card from './Card'
import SwitchButton from './SwitchButton'
import data from './data.json'

export interface DataItem {
  id: string,
  type: string,
  name: string,
  imagePath: string,
  specs: string[],
  discount: number,
  price: number,
  originPrice: number,
  monthlyPrice: number,
  delivery: string,
  button: string,
}

// container for cards
const CardContainer = () => {
  // state variable for page & data, both are props pass into SwitchButton & Card
  const [page, setPage] = useState(0)
  const [currentData, setCurrentData] = useState<DataItem[]>([])

  useEffect(()=>{
    setCurrentData(data.slice(page * 4, page * 4 + 4))
  }, [page])

  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex justify-end'>
        <SwitchButton page={page} setPage={setPage} currentData={currentData}/>
      </div>
      <div className='flex flex-wrap justify-between space-x-2 w-full'>
        <Card currentData={currentData}/>
      </div>
    </div>
  )
}

export default CardContainer