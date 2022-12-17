import { useState } from "react";
import Menu from "./Menu";
import Navhref from "./Navhref";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-md-8 order-md-last">
              <div className="row">
                <div className="col-md-6 text-end">
                  <Navhref passClass="navbar-brand">
                    Logistica <span>Architecture Agency</span>
                  </Navhref>
                </div>
                <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                  <form action="#" className="searchform order-lg-last">
                    <div className="form-group d-flex">
                      <input
                        type="text"
                        className="form-control pl-3"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        placeholder=""
                        className="form-control search"
                      >
                        <span className="fa fa-search"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <Navhref passClass="d-flex align-items-center justify-content-center">
                    <span className="fa fa-facebook">
                      <i className="sr-only">Facebook</i>
                    </span>
                  </Navhref>
                  <Navhref passClass="d-flex align-items-center justify-content-center">
                    <span className="fa fa-twitter">
                      <i className="sr-only">Twitter</i>
                    </span>
                  </Navhref>
                  <Navhref passClass="d-flex align-items-center justify-content-center">
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </Navhref>
                  <Navhref passClass="d-flex align-items-center justify-content-center">
                    <span className="fa fa-instagram">
                      <i className="sr-only">Instagram</i>
                    </span>
                  </Navhref>
                  <Navhref passClass="d-flex align-items-center justify-content-center">
                    <span className="fa fa-dribbble">
                      <i className="sr-only">Dribbble</i>
                    </span>
                  </Navhref>
                </p>
              </div>
            </div>
          </div>
        </div>
  
      </section>
      <Menu />
    </>
  );
};

export default Header;
