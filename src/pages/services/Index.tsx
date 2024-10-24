import React from 'react'
import Carousel from '../home/components/Carousel'

const Index: React.FC = () => {
  return (
    <div className="min-w-h-screen">
      <Carousel home={false} page="Services" />
    </div>
  )
}

export default Index
