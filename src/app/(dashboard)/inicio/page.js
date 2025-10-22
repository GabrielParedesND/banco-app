import { CardOptions, CardViewer } from '@/components'
import React from 'react'
import { FaList, FaMoneyBillTransfer, FaWallet } from 'react-icons/fa6'


const options = [
  {
    id: '1',
    title: 'Cuentas y Tarjetas',
    icon: <FaWallet />,
    iconColor: 'text-blue-500',
    link: '/cuentas-tarjetas'
  },
  {
    id: '2',
    title: 'Transferencias',
    icon: <FaMoneyBillTransfer />,
    iconColor: 'text-green-500',
    link: '/transferencias'
  },
  {
    id: '3',
    title: 'Movimientos',
    icon: <FaList />,
    iconColor: 'text-yellow-500',
    link: '/movimientos'
  }
]

const InicioPage = () => {
  return (
    <div>
      
      <CardViewer />

      <CardOptions options={options} />

    </div>
  )
}

export default InicioPage