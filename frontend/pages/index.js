import React from 'react'

import { Books } from '../components'

const Index = () => {
  const books = [
    {
      id: 1,
      title: 'Mulheres',
      author: 'Charles Bukowski',
      price: 'R$ 20,00',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/41w4d+uOCcL._SX300_BO1,204,203,200_.jpg',
      quantity: 1
    },
    {
      id: 2,
      title: 'Misto Quente',
      author: 'Charles Bukowski',
      price: 'R$ 20,00',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/51bw5OsWl4L._SX300_BO1,204,203,200_.jpg',
      quantity: 1
    },
    {
      id: 3,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      price: 'R$ 20,00',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/41lZKXt1+ML._SY344_BO1,204,203,200_.jpg',
      quantity: 1
    },
    {
      id: 4,
      title: 'O amor é um cão dos diabos',
      author: 'Charles Bukowski',
      price: 'R$ 20,00',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/41B4WMzk-nL._SX308_BO1,204,203,200_.jpg',
      quantity: 1
    }
  ]

  return (
    <Books books={books} />
  )
}

export default Index
