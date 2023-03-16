import React, {useState, useEffect} from 'react'
import {FooterBanner, HeroBanner, Product} from '../components'
import {client} from '../client'

const Home = () => {
  const [products, setProducts] = useState(null);
  const [heroBanner, setHeroBanner] = useState(null);

  const fetchProducts = () => {
    client.fetch('*[_type == "product"]')
    .then(data =>{
      setProducts(data)
    })
    .catch(err =>{
      console.log('Este error', err)
    })
  };

  const fetchBanner = () =>{
    client.fetch('*[_type == "banner"]')
    .then(data =>{
      setHeroBanner(data[0])
    })
    .catch(err =>{
      console.log('Este error', err)
    })
  };

  useEffect(()=>{
    fetchBanner()
    fetchProducts()
  },[]);
  
  
  
  return (
    <div className='layout'>

     
      <main className='main-container'>
        <div>
            {heroBanner && <HeroBanner heroBanner={heroBanner} />}
        <div className="products-heading">
          <h2>Los Mejores Productos </h2>
          <p>para comprar con seguridad</p>
        </div>

        <div className="products-container">
          {products?.map(product => <Product key={product._id} product={product}/>)}
        </div>
          {heroBanner && <FooterBanner footerBanner={heroBanner}/>}
        {/* <FooterBanner footerBanner={heroBanner && heroBanner} /> */}
        </div>
      </main>

   
    </div>
  )
}

export default Home