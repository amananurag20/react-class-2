import React, { useContext } from 'react'

import {AuthContext} from '../context/AuthContext';

const Signup = () => {
  const data= useContext(AuthContext);
  console.log("signup",data)
  return (
    <div>
      <img src='https://cdn-icons-png.flaticon.com/512/6159/6159448.png'></img>
    </div>
  )
}

export default Signup
