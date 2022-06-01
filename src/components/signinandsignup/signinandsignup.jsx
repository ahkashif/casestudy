import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className='options'>
      <Link className='option' to='/signin'>SIGN IN</Link>
      <Link className='option' to='/register'>Register</Link>
    </div>
  )
}
