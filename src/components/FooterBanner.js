import React from 'react';
import {Link} from 'react-router-dom';

import { urlFor } from '../client';

const FooterBanner = ({ 'footerBanner': { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  const slug = product.toLowerCase()
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link to={`/product/${slug}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image).url()} className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner