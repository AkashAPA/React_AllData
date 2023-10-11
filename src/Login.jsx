import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Login.css';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [progress, setProgress] = useState(0)
  const [formData, setFormData] = useState({
    UserName: '',
    Password: '',
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    setProgress(10);
    e.preventDefault();
    setProgress(50);

    try {
      setProgress(95);
      const response = await axios.get('https://dashboard-3frk.onrender.com/loginData');
      setProgress(100);
      const loginData = response.data;
      const { UserName, Password } = formData;
      const user = loginData.find((user) => user.username === UserName && user.password === Password);
      if (user) {
        Swal.fire({
          title: 'Login Successfully!',
          icon: 'success',
          button: 'Yess!!',
        });
        toast.success('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        history.push('/Home', { UserName }); // Pass the username to the homepage
      } else {
        // Swal.fire({
        //   title: 'Invalid Credentials!',
        //   text: 'Please enter valid username and password.',
        //   icon: 'warning',
        //   button: 'Ok',
        // });
        toast.error('Invalid Credentials!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    } catch (error) {
      console.error('Error fetching login data:', error);
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while logging in.',
        icon: 'error',
        button: 'Ok',
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Fetch login data from an API when the component mounts
    // You can use this data to validate user credentials
    // Example: axios.get('http://localhost:3000/loginData').then((response) => setLoginData(response.data));
  }, []);

  return (
    <>
    <LoadingBar
                height={3}
                color='#f11946'
                progress={progress}
            />
            <section className="LoginMainContainer">
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* ... Your animated boxes ... */}
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <span className="AnimatedBox" />
      <div className="singin">
        <div className="content">
          <form onSubmit={handleSubmit} className="content">
            <h2>Sign In</h2>
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  id="MainLoginFormName"
                  name="UserName"
                  value={formData.UserName}
                  onChange={handleInputChange}
                  autoComplete='off'
                />
                <i>Username</i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  id="MainLoginFormPass"
                  name="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                  autoComplete='off'
                />
                <i>Password</i>
              </div>
              <div className="links">
                <NavLink to="#">Forgot Password</NavLink>
                <NavLink to="/Signup">Sign up</NavLink>
              </div>
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Login;