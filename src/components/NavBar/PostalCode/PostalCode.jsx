import { useState } from 'react';

import './PostalCode.css'
import { CiLocationOn } from "react-icons/ci";

const PostalCode = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={handleOpen} id='postalCode'><span><CiLocationOn /></span><span>Código postal</span></button>
      {open && (
        <div id='postalCodeModal'>
          <div id='postalCodeSearch'>
            <h4>Ingresa tu código postal</h4>
            <p>Podes calcular el costo de tu envio</p>
            <form>
              <input type="text" placeholder='Código postal' />
              <button>Usar</button>
            </form>
            <button onClick={handleOpen} id='postalCodeClose'>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default PostalCode