import React from 'react';
import './LoginFormY.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useFormik } from 'formik';
import { simpleFormSchema } from '../schemas';
// import Navbar from '../Pages/Navbar';

const initialValues = {
  username: '',
  password: '',
  confirm_password: ''
}


const LoginFormY = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: simpleFormSchema,
    onSubmit: (value, action) => {
      console.log(value);
      action.resetForm()

    }

  })
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
              <h2>Login Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="Form-second-inputBox">
                  <input type="text" autoComplete='off' placeholder="Username" value={values.username} onChange={handleChange} onBlur={handleBlur} minLength="4" maxLength="20" id="username" name="username" />
                  {errors.username && touched.username ? (<p>{errors.username}</p>) : null}
                </div>
                <div className="Form-second-inputBox">
                  <input type="password" autoComplete='off' placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} minLength="6" maxLength="50" id="password" name="password" />
                  {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
                </div>
                {/* <div className="Form-second-inputBox">
                                    <input type="password" autoComplete='off' placeholder="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} minLength="6" maxLength="50" id="confirm_password" name="confirm_password" />
                                    {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}
                                </div> */}
                <div className="Form-second-inputBox">
                  <input type="submit" value="Login" />
                </div>
                <p className="Form-second-forget">Forgot password ? <Link to="#">Click Here</Link></p>
                <p className="Form-second-forget">Don't have an account ? <Link to="#">Sign up</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginFormY;
