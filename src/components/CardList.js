import Image from 'next/image'
import React from 'react'

const CardList = ({ options }) => {
  return (
    <div>
      {options && options.map((option) => (
        <Image
          key={option.id}
          className='w-[300px] mx-auto'
          src={option.imageSrc}
          width={1920}
          height={1080}
          alt={option.altText}
        />
      ))}
    </div>
  )
}

export default CardList