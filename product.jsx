import "./Product.css";
function Product(){
    return (
        <div className="Box">
            <h3>black shirt</h3>
            <p>black summer comfortable shirt!</p>
        </div>
    );
}

function Product2({title,price=29,feature}){
    return (
        <div className="Box">
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{feature}</p>
        </div>
    );
}

export {Product,Product2};