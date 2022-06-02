import React from "react";
import { Link } from 'react-router-dom';
import Logo  from '../../logo.png';
import SignInandSignUp from "../signinandsignup/signinandsignup";
import Cart from '../cart/cart';

const Header = () => (
    <div className="header">
        <Link to='/' className='logo-container'>
            <img src={Logo} alt="" />
        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                Home
            </Link>
            <Link className='option' to='/products'>
                Products
            </Link>
        </div>
        <Cart />
        <SignInandSignUp />
    </div>
);

export default Header;