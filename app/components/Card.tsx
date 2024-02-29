import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col shadow-lg rounded-md'>
      <div className='info p-6'>
        <div>
          <h1 className='rounded-full border-2 px-2 inline-block'>Prebuilt PC</h1>
        </div>
        <div className='w-auto h-48 flex justify-center align-middle'>
          <img src='/image/Gaming PC Y40BG201.webp' className='object-contain'/>
        </div>
        <h2>Creator RDY Y40BG201</h2>
        <ul>Windows 11 Pro</ul>
        <ul>Intel Core i9-13900KF CPU</ul>
        <ul>GeForce RTX 4090 24GB GPU</ul>
        <ul>2TB M.2 GEN4 NVMe SSD</ul>
        <ul>32GB DDR5-6000MHz RGB RAM</ul>
      </div>
      <div className='price p-6 bg-slate-100'>
        <div>
          <h1 className='rounded-full px-4 py-1 inline-block text-white bg-rose-500'>SAVE $450</h1>
        </div>
      </div>
    </div>
  )
}

export default Card