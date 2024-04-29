import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductService from '../../service/ProductService';
import { RiHeartAddLine } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";


import './ProductDetail.css'

const ProductDetail = ({ id, requestStore }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await ProductService.fetchProducts(requestStore.allProducts + "/" + id);
        setProduct(productData);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, [requestStore.allProducts, id]);

  return (
    <main id='productDetail'>
      {
        <div id='productDetail-container'>
          <div id='productDetail-image'>
            <img src={product.image} alt={"imagen_" + product.title} />
          </div>
          <div id='productDetail-detail'>
            <h2>{product.title}</h2>
            <p>Categoría: {product.category}</p>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <div>
              <button><RiHeartAddLine /></button>
              <button><BsCartPlus /></button>
            </div>
            <button id='productDetail-buy'>COMPRAR</button>
          </div>
        </div>
      }
    </main>
  );
};

ProductDetail.propTypes = {
  requestStore: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default ProductDetail;