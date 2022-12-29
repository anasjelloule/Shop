import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import swal from 'sweetalert';

import {
  opencart,
  removeitemcart,
  removeAndUpdate,
  cartAndUpdate,
  clearcart
} from "./../../../state";
export const Cart = () => {
  const cartopen = useSelector((state) => state.Sites.showcart) || "";
  const cart = useSelector((state) => state.Sites.cart) || "";
  const totalcart = useSelector((state) => state.Sites.total) || "";
  const dispatch = useDispatch();
  let [countcart, setcountcart] = useState(0);

  const showcart = () => dispatch(opencart());
  return (
    <>
      <div
        className={`offcanvas offcanvas-start ${cartopen ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={showcart}
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="container">
            {cart.length > 0 ? (
              <Fragment>
                {cart.map((el, ind) => {
                  //setcountcart(el.qty*el.price);
                  return (
                    <div className="ec" key={ind}>
                      <div className="ec-img">
                        <img src={el.image || ""} className="w-100" />
                      </div>
                      <div className="ec-txt">
                        <div className="ec-title">
                        <span>{el.title.split(" ").splice(0,5).join(" ")}...</span>
                          <span
                            className="text-black align-self-start text-bg-danger"
                            style={{
                              cursor: "pointer",
                              width: "15px",
                              textAlign: "center",
                            }}
                            onClick={() => dispatch(removeAndUpdate(el.id))}
                          >
                            X
                          </span>
                        </div>
                        <div className="text-end text-black ec-price">
                          <span>{el.qty}</span>
                          <input
                            type="number"
                            onChange={(e) =>
                              dispatch(
                                cartAndUpdate({
                                  id: el.id,
                                  qty: e.currentTarget.value,
                                })
                              )
                            }
                            value={el.qty}
                            min={1}
                          />
                          <br />
                          <span>{el.price * el.qty} DH</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="d-flex justify-content-around">
                  <span>Total</span>
                  {totalcart}
                </div>
            <div>
            <Link
                  href="/Checkout"
                  className="btn btn-outline-warning"
                  onClick={showcart}
                >
                  Checkout
                </Link>
                <button className="btn" onClick={()=>
              swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                dispatch(clearcart())
                showcart()
                swal('Cart Cleard')
                } 
              })
                }>Clear Cart</button>
            </div>
              </Fragment>
            ) : (
              <h1>You Cart Empty</h1>
            )}
          </div>
        </div>
      </div>
      {cartopen && (
        <div className="fade show modal-backdrop" onClick={showcart}></div>
      )}
    </>
  );
};
