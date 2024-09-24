import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import React Router components
// import './loginsignup/LoginSignUp.css';
import Login from './Loginpage/Loginpage';


// import Login from './login-signup/Login'; // Login components
// import SignUp from './login-signup/SignUp'; // Sign Up component 
import HeaderArea from './HeaderArea/HeaderArea'; // Header component

function App() {
  return (
    
      <div className="App">
        {/* Header Component */}
        <HeaderArea /> 
        
        {/* Define Routes for Login and Sign Up */}
        {/* <Routes> */}
          {/* Default Route to /login */}
          <Route path="/" element={<Navigate to="/login" />} />
          {/* Route for Login */}
          <Route path="/login" element={<Login />} />
          {/* Route for Sign Up */}
          {/* <Route path="/signup" element={<SignUp />} />1 */}
        {/* </Routes> */}
      </div>
    // </Router>  
  );
}

export default App;
