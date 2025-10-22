import React from 'react'
import Card from './Card'

const transactions = [
  {
    id: '1',
    description: 'Factura de agua',
    amount: 'Q150.00',
    type: 'debit',
    status: 'failed',
    dateTime: '2025-10-22T10:30:00Z'
  },
  {
    id: '2',
    description: 'Salario Jul',
    amount: 'Q150.00',
    type: 'credit',
    status: 'completed',
    dateTime: '2025-10-21T10:30:00Z'
  },
  {
    id: '3',
    description: 'Factura de luz',
    amount: 'Q150.00',
    type: 'debit',
    status: 'failed',
    dateTime: '2025-10-21T10:30:00Z'
  },
  {
    id: '4',
    description: 'Transferencia de Jane',
    amount: 'Q150.00',
    type: 'debit',
    status: 'completed',
    dateTime: '2025-10-21T10:30:00Z'
  },
  {
    id: '5',
    description: 'Factura de internet',
    amount: 'Q150.00',
    type: 'debit',
    status: 'failed',
    dateTime: '2025-10-21T10:30:00Z'
  }
]

function TransactionList() {
  return (
    <div>
      {transactions.map((transaction) => (
        <div className='mb-3' key={transaction.id}>
          <Card>
            <div className='flex flex-col w-full space-y-2'>
              <div className='flex justify-between items-center'>
                <p className={`font-semibold`}>{`${transaction.type === 'credit' ? 'Ingreso: ' : ''}${transaction.description}`}</p>
                <p className={`font-bold ${transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>{`${transaction.type === 'credit' ? '+' : '-'}${transaction.amount}`}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className={`font-semibold text-sm text-gray-400`}>{transaction.status === 'failed' ? 'Sin éxito' : ''}</p>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default TransactionList