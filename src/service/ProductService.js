class ProductService {

  static async fetchProducts(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

}

export default ProductService