// rafce
import React from 'react';
import { Link,useLocation } from "react-router-dom";
import{ useNavigate }from 'react-router-dom'
// for navbar must include bootstrap and js cdn links in index.html
const Navbar = () => {
  let navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  // when our cursor on about then it become active and when on home then its become active this can be done using uselocation
  // using this we can trase the location of any element or components
  let location = useLocation();
  React.useEffect(() => {
//  console.log(location.pathname);
  }, [location]);
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="">iNotebook</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/"?"active":""}`}aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/about">About</Link>
          </li>
        </ul>
        {/* // from here we started creating login credential */}
      {!localStorage.getItem('token')?<form className="d-flex"  >
        <Link   className="btn btn-primary mx-1"  to="/login" role="button" >Login</Link>
        <Link   className="btn btn-primary mx-1" to="/signup" role="button"  >Signup</Link>
        </form>:<button  onClick={handlelogout}className="btn btn-primary">Log Out</button>}
      </div>
    </div>
  </nav>
  )
}

export default Navbar
 