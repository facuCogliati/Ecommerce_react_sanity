import React, {useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../Utils';

const Success = () => {
  const navigate = useNavigate()
  const { setCartItems, setTotalPrice, setTotalQuantities, setShowCart, totalQuantities } = useStateContext();
  
  useEffect(() => {
    if(totalQuantities < 1) return navigate('/') 
    localStorage.clear();
    setShowCart(false)
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Gracias por tu Orden de compra!</h2>
        <p className="email-msg">Revise su bandeja de entrada de correo electrónico para el recibo.</p>
        <p className="description">
        Si tiene alguna pregunta, envíe un correo electrónico a
          <a className="email" href="mailto:order@example.com">
            facu.cogliati@gmail.com
          </a>
        </p>
        <Link to="/">
          <button type="button" width="300px" className="btn">
            Continuar comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success