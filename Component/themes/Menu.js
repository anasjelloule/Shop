import { useState } from "react";
import { useSelector } from 'react-redux'
import { useRouter } from "next/router";
import Navhref from "./Navhref";

const Menu = () => {
 
  const [open, setOpen] = useState(false);
  const sites=useSelector(state=>state.Sites.sites.pages)||''
const route=useRouter()
  return (
   <>
       <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container-fluid">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars"></span> Menu
            </button> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            > 
              Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                {sites.map((site,index)=>(
          <li className={`nav-item ${site.slug==route.route.replace('/','')?'active':''}`}  key={index} >
                 
          <Navhref passClass={`nav-link `} Link={`/${site.slug}`}>{site.title}</Navhref>
        </li>
                ))}
      
                <li
                  className={`nav-item dropdown ${open ? "show " : ""}`}
                  onMouseLeave={() => setOpen(!true)}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onMouseOver={() => setOpen(!false)}
                  >
                    Page
                  </a>
                  <div
                    className={`${open ? "show " : ""} dropdown-menu `}
                    aria-labelledby="dropdown04"
                  >
                    <Navhref passClass="dropdown-item" Link="About" >About</Navhref>
                  </div>
                </li>
                <li className="nav-item">
                  <Navhref passClass="nav-link">Work</Navhref>
                </li>
              </ul>
            </div>
          </div>
        </nav>
   </>
  );
};

export default Menu;
