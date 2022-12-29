import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";

import { ProductItem } from "../Component/Products/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { LoadProducts, loadstorage } from "./../state";
let called = false;

function Home() {
  let [electronics, setelectronics] = useState(
    useSelector((state) => state.Sites.products)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadstorage("cart"));
    if (!called) {
      called = true;

      // axios
      //   .request("https://fakestoreapi.com/products/categories")
      //   .then((data) => {

      //   });
      axios
        .request(`https://fakestoreapi.com/products/category/electronics`)
        .then((datacat) => {
          setelectronics(datacat.data);
          dispatch(LoadProducts(datacat.data));
        });
    }
    return () => {};
  }, []);

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage:
            'url("https://preview.colorlib.com/theme/bootstrap/website-menu-03/images/hero_1.jpg")',
        }}
      ></div>

      {electronics.length > 0 && (
        <div>
          <Carousel cols={4} loop={true}>
            {electronics.map((category, ind) => {
              return (
                <Carousel.Item key={ind}>
                  <ProductItem
                    image={category.image}
                    title={category.title}
                    id={category.id}
                    price={category.price.toFixed(2)}
                    description={category.description}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      )}
    </>
  );
}

export default Home;
