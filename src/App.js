import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/signIn/signIn";

function App() {
  
  const Shop =()=>{
    return(
      <h1>I'm the shop page</h1>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signIn' element={<SignIn/>}/>
      </Route>
    </Routes>
   
  );
}

export default App;
