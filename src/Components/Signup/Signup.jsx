import React from 'react';
// import './LoginFormY.css'
import { Link,useHistory } from 'react-router-dom'; // Import useHistory
import { useFormik } from 'formik';
import { simpleFormSchema } from '../schemas';
import Axios from 'axios'; // Import Axios
import Swal from 'sweetalert2';
const initialValues = {
  username: '',
  password: '',
}

const Signup = () => {
  const history = useHistory();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: simpleFormSchema,
    onSubmit: async (values) => {
      try {
        const response = await Axios.post('https://dashboard-3frk.onrender.com/loginData', values);

        // Check for HTTP status code ranges (e.g., 2xx for success)
        if (response.status >= 200 && response.status < 300) {
          // alert('Login successful'); // Display an alert for success
          
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Your Account is Created Successfully You want to SignIn of your account?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, SignIn!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'SignIn',
                'You have been successfully Navigated to SignIn Page, SignIn of your account',
                'success'
              )
              history.push('/');
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your SignIn Navigation is Canceled :)',
                'error'
              )
            }
          })
        } else {
          console.error('Login failed');
            history.push('/Signup');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  });

  return (
    <>
    {/* <div className="ms-5">

    <Navbar/>
    </div> */}
    
      <section className='Form-second-main-section'>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="box">
          <div className="square" ></div>
          <div className="square" ></div>
          <div className="square" ></div>
          <div className="square" ></div>
          <div className="square" ></div>
          <div className="Form-second-container">
            <div className="form-second">
              <h2>Sign up Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="Form-second-inputBox">
                  <input type="text" autoComplete='off' placeholder="Username" value={values.username} onChange={handleChange} onBlur={handleBlur} minLength="4" maxLength="20" id="username" name="username" />
                  {errors.username && touched.username ? (<p className='text-danger'>{errors.username}</p>) : null}
                </div>
                <div className="Form-second-inputBox">
                  <input type="password" autoComplete='off' placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} minLength="6" maxLength="50" id="password" name="password" />
                  {errors.password && touched.password ? (<p className='text-danger'>{errors.password}</p>) : null}
                </div>
                {/* <div className="Form-second-inputBox">
                                    <input type="password" autoComplete='off' placeholder="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} minLength="6" maxLength="50" id="confirm_password" name="confirm_password" />
                                    {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}
                                </div> */}
                <div className="Form-second-inputBox">
                  <input type="submit" value="Sign up" />
                </div>
                {/* <p className="Form-second-forget">Forgot password ? <Link to="#">Click Here</Link></p> */}
                <p className="Form-second-forget text-dark">Have an account ? <Link to="/" className="text-info">Sign In</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
