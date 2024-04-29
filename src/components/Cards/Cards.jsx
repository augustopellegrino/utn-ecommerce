import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductService from '../../service/ProductService';
import { RiHeartAddLine } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";


import './Cards.css'
import { Link } from 'react-router-dom';

const Cards = ({ requestStore }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await ProductService.fetchProducts(requestStore.allProducts);
        setProduct(productData);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, [requestStore.allProducts]);

  return (
    <main id='cards'>
      {product.map((productCard) => (
        <Link key={productCard.id} to={`/product/${productCard.id}`} className='link-no-underline'>
          <div className='card' key={productCard.id}>
            <div className='images'>
              <img src={productCard.image} alt={"imagen_" + productCard.title} />
            </div>
            <p>{productCard.title}</p>
            <h3>${productCard.price}</h3>
            <div>
              <button><RiHeartAddLine /></button>
              <button><BsCartPlus /></button>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
};

Cards.propTypes = {
  requestStore: PropTypes.object.isRequired
};

export default Cards;
