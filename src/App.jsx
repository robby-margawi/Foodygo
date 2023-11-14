// import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import AuthLayout from "./pages/auth/AuthLayout"
import SignInComponent from "./pages/auth/SignInComponent"
import SignUpComponent from "./pages/auth/SignUpComponent"
import RootLayout from "./pages/root/RootLayout"
import Homepage from "./pages/root/Homepage"
import PrivateComponent from "./components/PrivateComponent"

function App() {

  return <>  
    <Routes> 
      {/* Public route */}
      <Route element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SignInComponent/>}/>
        <Route path="/sign-up" element={<SignUpComponent/>}/>
      </Route>
      {/* Private route */}
      <Route element={<RootLayout/>}>
        <Route index element={<PrivateComponent redirectTo="/sign-in"><Homepage/></PrivateComponent>}/>
      </Route>
    </Routes>
  </>
}
 

export default App
