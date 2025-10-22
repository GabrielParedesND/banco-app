import Link from 'next/link'
import React from 'react'
import Card from './Card'

//  [{ id: '1', icon: <SomeIcon />, iconColor: 'bg-blue-500', title: 'Option 1' }, ...]


function AccountList({ options }) {
  return (
    <div className='grid grid-cols-1 gap-2 w-full'>
      {options && options.map((option, index) => (
        <Link className='w-full' key={option.id} href={option.link}>
          <Card>
            <div className='w-full space-y-3 font-semibold'>
              <div className='flex justify-between items-center'>
                <p className=''>{option.label}</p>
                <p>{option.number}</p>
              </div>

               <div className='flex justify-between items-center text-sm'>  
                <p className='text-gray-400'>Saldo</p>
                <p className='text-[#77308A]'>{option.balance}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default AccountList