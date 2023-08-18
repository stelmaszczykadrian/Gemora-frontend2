import React from "react";
import ProductCardProps from "./ProductCardProps";
import {formatPrice} from "../../utils/utils";


const ProductCard: React.FC<ProductCardProps> = ({name, price, imageUrl}) => {
    return (
        <div className="card text-center mb-3">
            <img src={`data:image/jpeg;base64,${imageUrl}`} alt={name} className="card-img-top"
                 style={{maxHeight: '150px', objectFit: 'contain'}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {formatPrice(price)}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;