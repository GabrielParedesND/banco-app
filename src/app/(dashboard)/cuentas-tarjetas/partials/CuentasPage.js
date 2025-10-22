import { AccountList } from '@/components'
import Image from 'next/image'
import React from 'react'


const accounts = [
  {
    id: '1',
    label: 'Cuenta Corriente',
    number: '1234567890',
    balance: 'Q5,000.00',
    link: '/movimientos'
  },
  {
    id: '2',
    label: 'Cuenta Ahorro',
    number: '0987654321',
    balance: 'Q26,000.00',
    link: '/movimientos'
  },
]


function CuentasPage() {
  return (
    <div className='w-full flex flex-col items-center gap-2'>
      <Image
        className='w-40 h-40 rounded-full'
        src="/assets/avatar.png"
        width={100}
        height={100}
        alt="Rounded avatar"
      />

      <h1 className='text-lg font-bold text-[#77308A]'>Gabriel Paredes</h1>



      <AccountList options={accounts} />
    </div>
  )
}

export default CuentasPage