// import React from "react";

// import classes from "../UI/CardWrapper";

// import classes from  './ProductList.module.css';

// const ProductList = (props) => {
//   return (
//     <CardWrapper className={classes.products}>
//       <ul>
//         {props.products.map((product) => (
//           <li key={product.id}>
//             {product.SellingPrice} ({product.ProductName})
//           </li>
//         ))}
//       </ul>
//     </CardWrapper>
//   );
// };

// export default ProductList;
import React from "react";

import CardWrapper from "../UI/CardWrapper";

import classes from './ProductList.module.css';

const ProductList = (props) => {
  return (
    <CardWrapper className={classes.products}>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            Product id:- {product.prodid}/ Product Name:- {product.ProductName}/ Product Selling Price:- Rs.{product.SellingPrice}
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default ProductList;
