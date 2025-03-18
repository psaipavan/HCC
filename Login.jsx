// import React, { useState } from "react";
// import "./Login.css"; 

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
    
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="logo">
//           <img src="logo.png" alt="Logo" /> 
//         </div>
//         <h2>Welcome Back</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-footer">
//             <label>
//               <input type="checkbox" />
//               Remember me
//             </label>
//             <a href="/forgot-password">Forgot password?</a>
//           </div>
//           <button type="submit" className="btn-primary">
//             Sign in
//           </button>
//         </form>
//         <p>
//           Don't have an account? <a href="/signup">Sign up</a>
//         </p>
//         <div className="social-login">
//           <p>Or continue with:</p>
//           <button className="btn-social google">Google</button>
//           <button className="btn-social github">GitHub</button>
//           <button className="btn-social apple">Apple</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src="logo.png" alt="Logo" /> 
        </div>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-footer">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="btn-primary">
            Sign in
          </button>
        </form>
        <p> Dont have an account? <span className="signup-link" onClick={() => navigate("/signup")}>Sign up</span></p>
        <div className="social-login">
          <p>Or continue with:</p>
          <button className="btn-social google">Google</button>
          <button className="btn-social github">GitHub</button>
          <button className="btn-social apple">Apple</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
