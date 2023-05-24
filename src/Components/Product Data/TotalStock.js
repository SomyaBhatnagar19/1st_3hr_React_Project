import React from "react";
import CardWrapper from "../UI/CardWrapper";
import classes from'./TotalStock.module.css';
const TotalStock = (props) => {
  const { products } = props;

  // Calculate the total value of stock
  const totalValue = products.reduce((total, product) => {
    return total + parseFloat(product.SellingPrice);
  }, 0);

  return (
    <CardWrapper className={classes.products}>
      <p>Total Stock Value: Rs. {totalValue}</p>
    </CardWrapper>
  );
};

export default TotalStock;
