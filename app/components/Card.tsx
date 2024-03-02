import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col shadow-lg rounded-md w-1/4'>
      <div className='info px-5 py-3'>
        <div className='space-y-3'>
          <h1 className='rounded-full border px-2 inline-block text-sm text-slate-500 border-slate-500'>Prebuilt PC</h1>
          <div className='w-auto h-36 flex justify-center align-middle'>
            <img src='/image/Gaming PC Y40BG201.webp' className='object-contain'/>
          </div>
          <h1 className='text-base font-bold'>Creator RDY Y40BG201</h1>
          <div>
            <ul className='text-sm'>Windows 11 Pro</ul>
            <ul className='text-sm'>Intel Core i9-13900KF CPU</ul>
            <ul className='text-sm'>GeForce RTX 4090 24GB GPU</ul>
            <ul className='text-sm'>2TB M.2 GEN4 NVMe SSD</ul>
            <ul className='text-sm'>32GB DDR5-6000MHz RGB RAM</ul>
          </div>
        </div>
      </div>
      <div className='price px-5 py-3 bg-slate-100 space-y-3'>
        <div>
          <div className='rounded-full px-2 py-1 inline-block text-white bg-rose-500 text-xs'>SAVE $450</div>
          <div className='flex space-x-2 items-end'>
            <div className='text-2xl font-bold'>
              $3,549
            </div>
            <div className='line-through text-slate-500 text-sm'>
              $3,999
            </div>
          </div>
          <div className='flex space-x-2 text-xs items-center'>
            <div>
              Starting at
            </div>
            <div className='text-cyan-600 text-xs'>
              $172.07/mo
            </div>
            <div className=' text-xs'>
              with
            </div>
            <div className='w-auto h-6 flex justify-center align-middle'>
              <img src='/image/Icon Affirm.svg' className='object-contain'/>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <div className='text-sm font-bold'>Free Shipping</div>
            <div className='text-sm'>Delivery By Friday, Jul 7</div>
          </div>
          <button className='px-4 border-rose-500 border text-rose-500 rounded-full text-sm'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card