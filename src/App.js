
import React, { useState } from 'react';
import SellerData from './Components/Product Data/SellerData';
import ProductList from './Components/Product Data/ProductList';
import TotalStock from './Components/Product Data/TotalStock';

function App() {
  const [products, setProducts] = useState([]);

  const addProductHandler = (productId, productSprice, productName) => {
    setProducts((prevProducts) => {
      return [
        ...prevProducts,
        {
          id: Math.random().toString(),
          prodid: productId,
          SellingPrice: productSprice,
          ProductName: productName,
        },
      ];
    });
  };

  return (
    <div>
      <SellerData onAddProduct={addProductHandler} />
      <ProductList products={products} />
      {products.length > 0 && <TotalStock products={products} />}
    </div>
  );
}

export default App;
