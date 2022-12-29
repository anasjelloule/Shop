
import { useEffect, useState } from "react";
import { ProductItem } from "../Component/Products/ProductItem";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { LoadProducts } from "./../state";

let called = false;

const Products = () => {
  let [loaded, setloaded] = useState(false);
  let [electronics, setelectronics] = useState(useSelector(state=>state.Sites.products));
  const dispatch=useDispatch()

  useEffect(() => {
    if (!called) {
      called = true;

      axios.request(`https://fakestoreapi.com/products`).then((data) => {
        setelectronics(data.data);
        dispatch(LoadProducts(data.data))
         
        setloaded(true)
      });
    }
    return () => {};
  }, []);

  return (
    <div className="container">
      <div className="row">
        {electronics.length > 0 && (
          <>
            {electronics.map((category, ind) => {
              return (
                <div className="col-3 " key={ind}>
                  <ProductItem image={category.image} title={category.title} id={category.id} price={category.price.toFixed(2)} description={category.description} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
