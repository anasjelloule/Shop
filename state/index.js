import { createSlice, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { createMiddleware, getPaths } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  sites: {
    pages: [
      {
        id: 1,
        title: "Home",
        slug: "",
        description: "It's Home",
      },
      {
        id: 2,
        title: "About",
        slug: "About",
        description: "It's About",
        notin: true,
      },

      {
        id: 5,
        title: "Products",
        slug: "Products",
        description: "Page Products",
      },
      {
        id: 3,
        title: "Contact",
        slug: "Contact",
        description: "It's Not Found",
      },
      {
        id: 6,
        title: "Checkout",
        slug: "Checkout",
        description: "Page Checkout",
        notin: true,
      },
      {
        id: 4,
        title: "Not Found",
        slug: "404",
        description: "It's Not Found",
        notin: true,
      },
    ],
  },
  showcart: false,
  cart: Array.from([]),
  total: 0,
  products: [],
  Order_ID: "",
};

const sitesSlice = createSlice({
  name: "Sites",
  initialState,
  reducers: {
    slug: {
      reducer(state, action) {
        state.sites;
      },
    },
    LoadProducts: {
      reducer(state, action) {
        state.products = Array.from(action.payload);
      },
    },
    loadstorage: {
      reducer(state, action) {
        // state.cart=;
        state.cart = JSON.parse(localStorage.getItem("cart"));
        let total = 0;
        state.cart.map((item) => {
          total += item.price * item.qty;
        });
        state.total = total;
      },
    },
    additemcart: {
      reducer(state, action) {
        state.viewer = action.payload.viewer;
        let ex = false;
        state.cart.map((item) => {
          if (item.id == action.payload.id) {
            ex = true;
            item.qty += action.payload.qty;
          }
        });
        if (!ex) state.cart.push(action.payload);
      },
    },
    removeitemcart: {
      reducer(state, action) {
        return {
          ...state,
          cart: [...state.cart.filter((item) => item.id != action.payload)],
        };
      },
    },
    updatetotal: {
      reducer(state, action) {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        let total = 0;
        state.cart.map((item) => {
          total += item.price * item.qty;
        });
        state.total = total.toFixed(2);
      },
    },
    updatecartqty: {
      reducer(state, action) {
        state.cart.map((item) => {
          if (item.id == action.payload.id) {
            item.qty = action.payload.qty;
          }
        });
      },
    },
    clearcart(state, action) {
      state.cart = [];
      state.total = 0;
    },
    createOrder: {
      reducer(state, action) {
        state.Order_ID = action.payload;
      },
    },
    opencart: {
      reducer(state, action) {
        if (!action.payload) state.showcart = !state.showcart;
        else state.showcart = action.payload;
      },
    },
  },
});

export const CreateOrder = (item) => (dispatch) => {
  dispatch(createOrder(item));
  dispatch(clearcart());
  dispatch(updatetotal());
};
export const addAndUpdate = (item) => (dispatch) => {
  dispatch(additemcart(item));
  dispatch(updatetotal(item));
};
export const removeAndUpdate = (item) => (dispatch) => {
  dispatch(removeitemcart(item));
  dispatch(updatetotal(item));
};
export const cartAndUpdate = (item) => (dispatch) => {
  dispatch(updatecartqty(item));
  dispatch(updatetotal(item));
};

const store = configureStore(
  { reducer: { Sites: sitesSlice.reducer } },

  composeWithDevTools(applyMiddleware())
);
export const {
  additemcart,
  opencart,
  LoadProducts,
  removeitemcart,
  updatetotal,
  updatecartqty,
  loadstorage,
  clearcart,
  createOrder,
} = sitesSlice.actions;
export const getsites = (state) => state;
export default store;
