import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Validation from './LoginValidation';

const Login = () => {
  const [values, setValues] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [userName, setUserName] = useState('')

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues(prev=>({...prev, [name]:value}))
    setErrors(Validation({ ...values, [name]: value }))
  }
  const handleLogin = (e) => {
    e.preventDefault();

    if(errors.email === '' && errors.password === ''){
        axios.post("http://localhost:3001/login", values)
  .then((res) => {
    if (res.status === 200 && res.data === "welcome") {
      console.log(res.data);
      setUserName(res.data.userName)
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  })
  .catch((err) => console.log(err));
  };
  }
  return (
    <div >
      <h2>Login</h2>
      <form className='form'onSubmit={handleLogin}>
        <label htmlFor='email'>Email:</label>
        <input
          type="email"
          placeholder="Email"
          name='email'
          onChange={handleInputs}
        />
        {errors.email && <span className='errors'>{errors.email}</span>}
        <label htmlFor='password'>password:</label>
        <input
          type="password"
          placeholder="Password"
          name='password'
          onChange={handleInputs}
        />
        {errors.password && <span className='errors'>{errors.password}</span>}
        <button type='submit' ><Link to="/home">Login</Link></button>
        <p>__OR__</p>
        <button ><Link to="/signup">Signup</Link></button>
      </form>
    </div>
  );
};

export default Login;
