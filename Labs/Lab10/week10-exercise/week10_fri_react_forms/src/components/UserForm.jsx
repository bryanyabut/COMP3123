import React, {useState} from 'react'

const INITIAL_USER_DATA ={
    name: '',
    email: '',
    password: ''
}
export default function UserForm() {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);

  const[errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ 
        ...userData, 
        [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('User Data Submitted:', userData);

        // make API call or other processing here
        setUserData(INITIAL_USER_DATA); 
    }
  };

  const validateForm = () => {
    // Build a local errors object synchronously, then update state once
    const errorObj = {};

    if (userData.name.trim() === '') {
      errorObj.name = 'Name is required';
    }

    if (userData.email.trim() === '') {
      errorObj.email = 'Email is required';
    }

    if (userData.password.trim() === '') {
      errorObj.password = 'Password is required';
    }

    setErrors(errorObj);

    return Object.keys(errorObj).length === 0;
  }

  return (
    <div>
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:
                <input type="text" name="name" value={userData.name} onChange={handleChange} />
            </label>
            {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
            <br />
            <label htmlFor="">Email:
                <input type="email" name="email" value={userData.email} onChange={handleChange}/>
            </label>
            {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
            <br />
            <label htmlFor="">Password:
                <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            </label>
            {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
