import {Product,Product2}  from "./product";

import "./Product.css";

function ProductCard(){
    let options=["chief"," longlasting"];


    return (
    <div className="Card">
        <Product />
        <Product />
        <Product2 title="Pen" price="45" />
        <Product2 title="Eraser" price={15} feature={options}/>
        <Product2 title="Eraser" feature={["extensible"," longlasting"]}/>




    </div>
    );
}

export default ProductCard;