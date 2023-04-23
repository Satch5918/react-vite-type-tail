import React from 'react'
import goku from './assets/descarga.jpg'

interface CardProps {
  title: string
  description: string
  image: string
}

const App: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={goku} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">asdasda</div>
        <p className="text-gray-700 text-base">rtrt56435</p>
      </div>
    </div>
  )
}

export default App