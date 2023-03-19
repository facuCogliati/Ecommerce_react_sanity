import React, {useEffect, useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import {client, urlFor} from '../client';
import {useStateContext} from '../context/StateContext'
import Product from '../components/Product'

const ProductDetail = () => {
  const productSlug = useParams();
  const [product, setProduct] = useState(null);
  const [products, setproducts] = useState([])
  const [index, setIndex] = useState(0);
  const {incQty, decQty, qty, onAdd, setShowCart} = useStateContext();
  const main = useRef(null)

  const handleBuyNow = () =>{
    onAdd(product, qty);
    setShowCart(true);
  };

  const fetchDetailProduct = () =>{
      client.fetch(`*[_type == "product" && slug.current == "${productSlug['productid']}"][0]`)
      .then(data =>{
          setProduct(data)
          
          // Tambien que devuelva el resto de productos que no estoy viendo 
          client.fetch(`*[_type == "product" && _id != "${data?._id}"]`)
          .then(data =>{
            setproducts(data)
          })
          .catch(err =>{
            console.log('Este error', err)
          })
      })
      .catch((error)=>{
          console.log(error);
      })
  };
  const executeScroll = () => main.current.scrollIntoView();

  
  useEffect(() => {
    fetchDetailProduct();
    executeScroll();
  }, [productSlug]);
      
  return (
    <div ref={main}>
      <div className="product-detail-container">
        {product && (
          <div>
          <div className="image-container">
            <img src={urlFor(product?.image && product?.image[index]).url()} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {product?.image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item).url()}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        )}
        
        <div className="product-detail-desc">
          <h1>{product?.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Detalles: </h4>
          <p>{product?.details}</p>
          <p className="price">${product?.price}</p>
          <div className="quantity">
            <h3>Cantidad:</h3>
            <p className="quantity-desc">
              <span className="minus"><AiOutlineMinus onClick={decQty} /></span>
              <span className="num">{qty}</span>
              <span className="plus"><AiOutlinePlus onClick={incQty} /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=> onAdd(product, qty)}>Agregar al carrito</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Comprar ahora</button>
          </div>
        </div>
      </div>
        {products && (
          <div className="maylike-products-wrapper">
           <h2>Quizas tambien te puede gustar</h2>
              <div className="marquee">
              <div className="maylike-products-container track">
               {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
        )}
    </div>
  )
}

export default ProductDetail