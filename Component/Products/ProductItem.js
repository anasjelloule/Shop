import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addAndUpdate } from "../../state";

export const ProductItem = ({ id, image, title, price, description }) => {
  const cart = useSelector((state) => state.Sites.cart) || "";
  const dispatch = useDispatch();

  const [added, setadded] = useState("");
  const [qty, setqty] = useState(1);
  const [edit, setedit] = useState(false);

  const additem = (id, image, price, title) => {
    dispatch(addAndUpdate({ id, qty, image, price, title }));
    setqty(1);
    // console.log("called"+id)
  };

  return (
    <div className="card p-3 zoomin">
      <div className="d-flex justify-content-between align-items-center flex-column">
        <div className="featureimg">
          <span className="thumb-info-wrapper">
            <img src={image || ""} width="200" />
          </span>
        </div>

        <h5 className="text-uppercase mb-0">{title}</h5>

        {/* <div className="d-flex flex-row user-ratings d-none">
            <div className="ratings">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h6 className="text-muted ml-1">4/5</h6>
          </div> */}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
        <span>{price}</span>
        <div className="colors">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <button
          className="inc"
          onClick={() => (qty > 1 ? setqty(qty - 1) : setqty(1))}
        >
          -
        </button>
        <span
          onDoubleClick={() => setedit(!edit)}
          onBlur={() => setedit(!edit)}
        >
          QTY&nbsp;&nbsp;&nbsp;
          {edit ? <input type="text" className="" /> : qty}
        </span>
        <button className="inc" onClick={() => setqty(qty + 1)}>
          +
        </button>
      </div>
      <button
        className={`btn btn-danger btnaddcart ${added}`}
        onClick={() => {
          additem(id, image, price, title);

          toast(
            <div>
              <img src={image} style={{ width: "20px" }} />
              {title} <br/>Qty {qty}
            </div>,
            {
              autoClose: 800,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              position: toast.POSITION.BOTTOM_RIGHT,
            }
          );
        }}
      >
        <span className="form-control__button-text">Add to cart</span>

        <span className="form-control__button-svg">
          <span className="svg-icon">
            <svg
              width="27"
              height="23"
              viewBox="0 0 27 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="svg-line-check"
                d="M1.97 11.94L10.03 20 25.217 2"
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </span>
      </button>
    </div>
  );
};
