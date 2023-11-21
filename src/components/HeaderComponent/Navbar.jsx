import { Link as Anchor } from "react-router-dom";
import "./navbar.css";


export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
      <nav className="navbar navbar-expand-sm bg-gray">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Anchor to={"/"} className="nav-link active text-light" aria-current="page" href="/">Home</Anchor>
              </li>
              <li className="nav-item">
                <Anchor to={"/card"} className="nav-link text-light" href="/card">
                  Card MyApp
                </Anchor>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};
