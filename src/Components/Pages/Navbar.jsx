import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
const Navbar = () => {
    const history = useHistory();
    const HandleLogput = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You want to log out of your account?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Logout it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'logged out',
                    'You have been successfully logged out of your account',
                    'success'
                )
                history.push('/');
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Logout is Canceled :)',
                    'error'
                )
            }
        })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/Home">
                        Navbar
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/Home">
                                    Home
                                </NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/Features">
                                    Features
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Table">
                                    Table
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    to="/Form"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Forms
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink className="dropdown-item NavLink" to="/Form">
                                            Employee Details
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink className="dropdown-item" to="/FormikForm">
                                            Formik Form
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink className="dropdown-item NavLink" to="/DynamicForm">
                                            Dynamic Form
                                        </NavLink>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Carousel">
                                    Carousel
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ToggleCards">
                                    ToggleCards
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Ecommerce">
                                    Ecommerce
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Timer">
                                    Circle Timer
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/CarSeller">
                                    CarSeller
                                </NavLink>
                            </li>
                            <li className=" Logout">
                                <NavLink className="nav-link" to="#" onClick={HandleLogput}>
                                    Logout
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;
