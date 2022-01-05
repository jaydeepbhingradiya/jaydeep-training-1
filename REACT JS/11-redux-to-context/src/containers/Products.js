import React, { useContext } from "react";
import ProductItem from "../components/Products/ProductItem";
import { ProductsContext } from "../context/products-context";
import "./Products.css";

const Products = (props) => {
  const productsctx = useContext(ProductsContext).products;

  return (
    <ul className="products-list">
      {productsctx.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
