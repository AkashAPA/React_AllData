import React from 'react'
// import {  useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from './Navbar';


const PersonalDetails = () => {
    // const navigate = useNavigate();
    const popup = () => {
        var name = document.getElementById("name").value;
        var Address = document.getElementById("Address").value;
        var email = document.getElementById("email").value;
        var phone_number = document.getElementById("phone_number").value;
        var bloodGroup = document.getElementById("bloodGroup").value;
        var Increment = document.getElementById("Increment").value;
        var Spackage = document.getElementById("Spackage").value;
        var Aadhar = document.getElementById("Aadhar").value;
        var Pan = document.getElementById("Pan").value;
        if (name === '' || Address === '' || email === '' || phone_number === '' || bloodGroup === '' || Increment === '' || Spackage === '' || Aadhar === '' || Pan === '') {
            Swal.fire({
                title: "Field Empty!",
                text: "Please check the missing fields!",
                icon: "warning",
                button: "Ok",
            });
            // navigate("/");

        } else {
            Swal.fire({
                title: "PERSONAL DETAILS Successfully submitted!",
                icon: "success",
                button: "Yess!!",
            });
            // navigate("/educationDetails");

        }
    }
    return (
        <>
        <Navbar/>
            <div className="main">
                <div className="container">
                    <form method="POST" className="appointment-form" id="appointment-form">
                        <h2>Personal Details</h2>
                        <div className="form-group-1">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                required className='input'
                            />
                            <input
                                type="text"
                                name="Address"
                                id="Address"
                                placeholder="Your Address"
                                required=""
                                className='input'
                            />
                            <input
                                type="number"
                                name="phone_number"
                                id="phone_number"
                                placeholder="Phone number"
                                required=""
                                className='input'
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                required="" className='input'
                            />
                            <label htmlFor="date-of-birth" className="Label">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="date-of-birth"
                                id="dateofbirth"
                                required="" className='input'
                            />
                            <input
                                type="text"
                                name="bloodGroup"
                                id="bloodGroup"
                                placeholder="Bloodgroup"
                                required="" className='input'
                            />
                            <input
                                type="number"
                                name="package"
                                id="Spackage"
                                placeholder="Package"
                                required="" className='input'
                            />
                            <input
                                type="number"
                                name="Increment"
                                id="Increment"
                                placeholder="Increment"
                                required="" className='input'
                            />
                            <input
                                type="number"
                                name="Aadhar"
                                id="Aadhar"
                                placeholder="Aadhar Number"
                                required="" className='input'
                            />
                            <label htmlFor="AadharCopy" className="Label">
                                Aadhar Copy
                            </label>
                            <input
                                type="file"
                                name="AadharCopy"
                                id="AadharCopy"
                                placeholder="Aadhar Number"
                                required="" className='input'
                            />
                            <input
                                type="number"
                                name="Pan"
                                id="Pan"
                                placeholder="Pan Number"
                                required className='input'
                            />
                            <label htmlFor="PanCopy" className="Label">
                                Pan Copy
                            </label>
                            <input type="file" name="PanCopy" id="PanCopy" required="" className='input' />
                            <label htmlFor="dateofjoinig" className="Label">
                                Date of Joining
                            </label>
                            <input
                                type="date"
                                name="date-of-joinig"
                                id="date-of-joinig"
                                required="" className='input'
                            />
                            <label htmlFor="lastDateOfWorking" className="Label">
                                Last Date Of Working
                            </label>
                            <input
                                type="date"
                                name="lastDateOfWorking"
                                id="lastDateOfWorking"
                                required="" className='input'
                            />
                            <label htmlFor="photo" className="Label">
                                Photo(Passport Size)
                            </label>
                            <input type="file" name="photo" id="photo" required=""  className="input"/>
                            <input
                                type="number"
                                name="Passport"
                                id="Passport"
                                placeholder="Passport Number"
                                required="" className='input'
                            />
                        </div>

                        <div className="form-submit">

                            <input
                                type="button"
                                name="submit"
                                id="submit"
                                className="input submit"
                                defaultValue="Submit and Next" onClick={popup}
                            />
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default PersonalDetails
