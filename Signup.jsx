// import "./Signup.css"; 

// const Signup = () => {
//   return (
//     <div className="container">
//       <div className="signup-box">
//         <img src="logo.png" alt="Logo" className="logo" />
//         <h2>Welcome</h2>
//         <p>Create your account</p>
//         <form>
//           <label>Name</label>
//           <input type="text" placeholder="Enter your name" required />

//           <label>Phone Number</label>
//           <input type="tel" placeholder="Enter your phone number" required />

//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" required />

//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" required />

//           <button type="submit" className="signup-btn">Sign Up</button>
//         </form>

//         <p>
//           Already have an account? <a href="/login">Sign in</a>
//         </p>

//         <div className="or">Or continue with:</div>

//         <button className="google">Google</button>
//         <button className="github">GitHub</button>
//         <button className="apple">Apple</button>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; 

const Signup = () => {
  const navigate = useNavigate(); // For navigation
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);
    
    // Redirect to Login page after signup
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="signup-box">
        <img src="logo.png" alt="Logo" className="logo" />
        <h2>Welcome</h2>
        <p>Create your account</p>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p>
          Already have an account? <a href="/login">Sign in</a>
        </p>

        <div className="or">Or continue with:</div>

        <button className="google">Google</button>
        <button className="github">GitHub</button>
        <button className="apple">Apple</button>
      </div>
    </div>
  );
};

export default Signup;
