import React from 'react'

function Register() {

  return (
    <div className='form-container'>
      <h1>Create an account</h1>
      <form>
      <div className='form-input'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
      </div>
      <div className='form-input'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
      </div>
      <div className='form-input'>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='confirmPassword' id='confirmPassword' name='confirmPassword' />
      </div>
      <div className='form-input'>
       <button className='btn btn-block'>Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Register
