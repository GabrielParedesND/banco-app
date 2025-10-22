import { CardList } from '@/components'
import Image from 'next/image'
import React from 'react'

const cards = [
  {
    id: '1',
    imageSrc: '/assets/card2.png',
    altText: 'Card 1',
    link: '/movimientos'
  },
  {
    id: '2',
    imageSrc: '/assets/card2.png',
    altText: 'Card 2',
    link: '/movimientos'
  }
]

function TarjetasPage() {
  return (
    <div>
      <CardList options={cards} />
    </div>
  )
}

export default TarjetasPage