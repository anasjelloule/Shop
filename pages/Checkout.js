import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import swal from "sweetalert";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import {
  CreateOrder
} from "./../state";
import axios from "axios";
const Checkout = () => {
  const cart = useSelector((state) => state.Sites.cart) || "";
  const totalcart = useSelector((state) => state.Sites.total) || "";
const dispatch = useDispatch()
const router = useRouter()
  const senddata = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = {
      "Order Id": nanoid(),
      Total: totalcart,
      Products: cart.map((a) => a.title).toString(),
    };
    for (var [key, value] of formData.entries()) {
     
      params[key] = value;
    }

    axios.get(process.env.GOOGLE_SHEET, { params }).then((res) => {
      if(res.data.result=="success"){
        dispatch(CreateOrder(params["Order Id"]))
        router.push('/Thanks')
     
      }
    });
    // .then((el)=>console.log(el) )
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              {cart.length > 0 ? (
                <>
                  {cart.map((el, ind) => (
                    <li className="list-group-item d-flex justify-content-between lh-condensed" key={ind}>
                      <div>
                        <img src={el.image || ""} className="w-25" />
                        <h6 className="my-0">
                          <span>
                            {el.title.split(" ").splice(0, 5).join(" ")}...
                          </span>
                        </h6>
                        <small className="text-muted">Brief description</small>
                      </div>
                      <span className="text-muted">{el.price * el.qty} DH</span>
                    </li>
                  ))}
                </>
              ) : (
                ""
              )}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (DH)</span>
                <strong>{totalcart}</strong>
              </li>
            </ul>

            <form className="card p-2" onSubmit={senddata}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" onSubmit={senddata}>
              <div className="mb-3">
                <label htmlFor="address">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="Name"
                  placeholder="Nom Complet"
                  required=""
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="Phone"
                  placeholder="Phone Number"
                  required=""
                />
                <div className="invalid-feedback"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="Adress"
                  placeholder="1234 Main St"
                  required=""
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
