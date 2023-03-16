import React from 'react'
import {Link} from 'react-router-dom'
import {urlFor} from '../client'

const Herobanner = ({heroBanner}) => {
  const slug = heroBanner.product.toLowerCase()
 
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner?.smallText}</p>
        <h3>{heroBanner?.midText}</h3>
        <h1>{heroBanner?.largeText1}</h1>
        <img src={urlFor(heroBanner?.image).url()} alt="headphones" className="hero-banner-image" />

        <div>
          <Link to={`/product/${slug}`}>
            <button type="button">{heroBanner?.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Descripcion</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herobanner

