import Image from 'next/image'
import React from 'react'
import data from './data.json'

// interface for define data type
interface Data {
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

const Card = () => {
  return (
    <>
      {data.map((item: Data) => (
        <div key={item.id} className='flex flex-col shadow-lg rounded-md w-full md:w-72'>
          <div className='info px-5 py-3'>
            <div className='space-y-3'>
              <h1 className='rounded-full border px-2 inline-block text-sm text-slate-500 border-slate-500'>{item.type}</h1>
              <div className='flex justify-center'>
                <Image 
                  src={item.imagePath}
                  width={150}
                  height={200}
                  alt='pc'
                />
              </div>
              <h1 className='text-base font-bold truncate'>{item.name}</h1>
              <div>
                {item.specs.map((spec: string,index: number) => (
                  <ul className='text-sm' key={index}>{spec}</ul>
                ))}
              </div>
            </div>
          </div>
          <div className='price px-5 py-3 bg-slate-100 space-y-3'>
            <div>
              <div className='rounded-full px-2 py-1 inline-block text-white bg-rose-500 text-xs font-thin'>SAVE ${item.discount}</div>
              <div className='flex space-x-2 items-end'>
                <div className='text-2xl font-bold'>
                  ${item.price}
                </div>
                <div className='line-through text-slate-500 text-sm'>
                  ${item.originPrice}
                </div>
              </div>
              <div className='flex space-x-2 text-sm items-center'>
                <div>
                  Starting at
                </div>
                <div className='text-cyan-600 text-sm'>
                  ${item.monthlyPrice}/mo
                </div>
                <div className=' text-sm'>
                  with
                </div>
                <div className='flex justify-center'>
                  <Image 
                    src='/image/Icon Affirm.svg'
                    width={40}
                    height={30}
                    alt='icon'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='text-sm font-bold'>Free Shipping</div>
                <div className='text-sm truncate'>Delivery By {item.delivery}</div>
              </div>
              <button className='px-4 border-rose-500 border text-rose-500 rounded-full text-sm'>{item.button}</button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card