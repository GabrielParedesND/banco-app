import Link from 'next/link'
import React from 'react'
import Card from './Card'

//  [{ id: '1', icon: <SomeIcon />, iconColor: 'bg-blue-500', title: 'Option 1' }, ...]


function CardOptions({ options }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
      {options && options.map((option, index) => (
        <Link key={option.id} href={option.link}>
          <Card>
            <div className={option.iconColor}>
              {option.icon}
            </div>
            <p>{option.title}</p>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default CardOptions