import React from 'react'
import Data from '../Data'

const Bollywood = () => {
  const bollywoodData = Data.filter(
    (item) => item.category === "Bollywood"
  )

  return (
    <div className="container">
      {bollywoodData.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.img_url} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Bollywood