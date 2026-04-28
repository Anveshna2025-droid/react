import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom';

const Bollywood = () => {

  const BollywoodData = Data.filter((item)=>item.category==="Bollywood");
  console.log(BollywoodData)

return (
  <div className="bollywood-container">
    {BollywoodData.map((bollydata) => (
      <div className="card" key={bollydata.id}>
        <Link to={`/details/${bollydata.id}`}>
          <img src={bollydata.img_url} alt="" />
          <h1>{bollydata.title}</h1>
        </Link>
      </div>
    ))}
  </div>
);}

export default Bollywood