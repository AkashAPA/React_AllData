import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';


const Sidebar = () => {
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
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/Home">
                            <i className="fa fa-home nav-icon" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Table">
                            <i class="fa-solid fa-table nav-icon"></i>
                            <span className="nav-text">Table</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Form">
                            <i class="fa-brands fa-wpforms nav-icon"></i>
                            <span className="nav-text">Forms
                            </span>
                        </Link>

                    </li>
                    <li>
                        <Link to="/Carousel">
                            <i class="fa-solid fa-greater-than-equal nav-icon"></i>
                            <span className="nav-text">Carousel
                            </span>
                        </Link>

                    </li>
                    <li>
                        <Link to="/ToggleCards">
                            <i class="fa-solid fa-id-card nav-icon"></i>
                            <span className="nav-text">ToggleCards
                            </span>
                        </Link>

                    </li>
                    <li>
                        <Link to="/Ecommerce">
                            <i className="fa-solid fa-pizza-slice nav-icon" />
                            <span className="nav-text">Ecommerce</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Timer">
                        <i class="fa-solid fa-stopwatch-20 nav-icon"/>
                            <span className="nav-text">Circle Timer</span>
                        </Link>
                    </li>
                     {/*<li>
                        <Link to="/">
                            <i className="fa fa-bell nav-icon" />
                            <span className="nav-text">Notification</span>
                        </Link>
                    </li> */}
                </ul>
                <ul className="logout">
                    <li>
                        <Link to="/Setting">
                            <i className="fa fa-cogs nav-icon" />
                            <span className="nav-text">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fa fa-right-from-bracket nav-icon" />
                            <span className="nav-text" onClick={HandleLogput}>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export default Sidebar;
