import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

const Signup = () => {
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:''
      })
      const navigate = useNavigate()
      const [errors, setErrors] = useState({})
    
      const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues(prev=>({...prev, [name]:value}))
        setErrors(Validation({ ...values, [name]: value }))
        console.log(e)
      }
      const handleSignup = (e) => {
        e.preventDefault();
   
        if(errors.name === '' && errors.email === '' && errors.password === ''){
            axios.post("http://localhost:3001/signup",values).then((res) => navigate("/")).catch((err)=>console.log(err))

        }
      };
  return (
    <div >
      <h2>Signup</h2>
      <form className='form'onSubmit={handleSignup}>
      <label htmlFor='name'>Name:</label>
      <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInputs}
        />
           {errors.name && <span className='errors'>{errors.name}</span>}
        <label htmlFor='email'>Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputs}
        />
           {errors.email && <span className='errors'>{errors.email}</span>}
        <label htmlFor='password'>password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputs}
        />
           {errors.password && <span className='errors'>{errors.password}</span>}
        <button type="submit" onClick={handleSignup}><Link>Signup</Link></button>
      </form>
    </div>
  );
};

export default Signup;
