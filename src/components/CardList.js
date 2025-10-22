import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardList = ({ options }) => {
  return (
    <div>
      {options && options.map((option) => (
        <Link key={option.id} href={option.link}>
          <Image
            key={option.id}
            className='w-[300px] mx-auto'
            src={option.imageSrc}
            width={1920}
            height={1080}
            alt={option.altText}
          />
        </Link>
      ))}
    </div>
  )
}

export default CardList