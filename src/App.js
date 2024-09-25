import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import React Router components

import Login from './Loginpage/Loginpage';

// import Login from './login-signup/Login'; // Login components
// import SignUp from './login-signup/SignUp'; // Sign Up component 
import HeaderArea from './HeaderArea/HeaderArea'; // Header component

function App() {
  return (
    
      <div className="App">
         
        <Routes>
          <Route path="/" element={<HeaderArea />}/>
          <Route path="/HeaderArea" element={<HeaderArea />}/>
          {/* Route for Login */}
          <Route path="/login" element={<Login />} />
          {/* Route for Sign Up */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </div>
  );
}

export default App;
