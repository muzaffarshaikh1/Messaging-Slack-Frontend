import React from "react";
import { Route, Routes } from "react-router";
import Auth from "./pages/Auth/Auth";
import SigninCard from "./components/organisms/Auth/SigninCard";
import SignupCard from "./components/organisms/Auth/SignupCard";

function App() {

  return (
    <>
      <Routes>
        <Route path="/auth/signin" element={<Auth><SigninCard /></Auth>} />
        <Route path="/auth/signup" element={<Auth><SignupCard /></Auth>} />
      </Routes>
    </>
  )
}

export default App
