// SellerData.js
import React, {useState} from "react";
import classes from './SellerData.module.css';
import CardWrapper from "../UI/CardWrapper";

const SellerData = (props) => {

    const [enteredProductId, setProductId] = useState("");
    const [enteredProductSPrice, setProductSPrice] = useState("");
    const [enteredProductName, setProductName] = useState("");

    

    //when form is submitted it envokes
    const addProductDataHandler = (event) => {
        event.preventDefault();

        props.onAddProduct(enteredProductId, enteredProductSPrice, enteredProductName);
        setProductId("");
        setProductSPrice("");
        setProductName("");
    };

    const setEnteredProductId = (event) => {
        setProductId(event.target.value);
      };
    
    const setEnteredProductSPrice = (event) => {
        setProductSPrice(event.target.value);
    };

    const setEnteredProductName = (event) => {
        setProductName(event.target.value);
    };


  return (
    <div>
      <header style={{textAlign:'center', background:'lightblue', padding: '0.5rem', fontFamily: 'italic'}}><h2>Seller Admin Page</h2></header>
      <CardWrapper className={classes.input}>
      <form onSubmit={addProductDataHandler}>
        <label htmlFor="id">Product Id: -</label>
        <input id="product_id" type="number" value={enteredProductId} onChange={setEnteredProductId}></input>
        <label htmlFor="Sprice">Selling Price: -</label>
        <input id="Sprice" type="number" value={enteredProductSPrice} onChange={setEnteredProductSPrice}></input>
        <label htmlFor="productName">Product Name: -</label>
        <input id="ProductName" type="text" value={enteredProductName} onChange={setEnteredProductName}></input>
        <button type="submit">Add Product</button>
      </form>
    </CardWrapper>
    </div>
    
  );
};

export default SellerData;
