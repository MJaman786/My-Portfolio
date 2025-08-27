import { NavLink } from "react-router-dom";
import "../Components/style/style.css"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "white" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ outline: "none", boxShadow: "none", border: "none" }}>
                        <span class="material-symbols-outlined fs-3">
                            sort
                        </span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btnClose ms-auto text-light" data-bs-dismiss="offcanvas" aria-label="Close" style={{ outline: "none", boxShadow: "none", border: "none"}}><i className="bi bi-x-lg"></i></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link active" aria-current="page">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/skills" className="nav-link active" aria-current="page">Skills</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/projects" className="nav-link active" aria-current="page">Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link active" aria-current="page">Contacts</NavLink>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu mt-lg-4">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;