import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link ,useLocation } from 'react-router-dom';

import '../css/Navbar.css';
import { getCartItems } from '../action';


const Navbar = (props) => {
    const location =useLocation().pathname;
    useEffect(() => {
        props.getCartItems();
    }, [])
    return (
        <div className="Navbar">
            <div className="ui secondary pointing menu">
                <Link to="/" className="item" style={{backgroundColor: location=="/"?"white":"unset"}}>
                    Home
                </Link>
                <Link to="/motherboard" className="item" style={{backgroundColor: location=="/motherboard"?"white":"unset"}} >
                    Motherboard
                </Link>
                <Link to="/memory" className="item" style={{backgroundColor: location=="/memory"?"white":"unset"}}>
                    Memory
                </Link>
                <Link to="/processor" className="item" style={{backgroundColor: location=="/processor"?"white":"unset"}}>
                    Processor
                </Link>
                <Link to="/graphics-card" className="item" style={{backgroundColor: location=="/graphics-card"?"white":"unset"}}>
                    Graphics Card
                </Link>
                <Link to="/add" className="item" style={{backgroundColor: location=="/add"?"white":"unset"}}>
                    Add Item
                </Link>
                <div className="right menu temp">
                    <Link to="/cart" className="item">
                        <i class="shopping cart large icon cartIcon" ></i>
                    </Link>
                    <div className="circle">{props.items.length}</div>
                    <Link to="/sign-in" className="ui item">
                        Sign In
                    </Link>
                    <Link to="/log-in" className="ui item">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // console.log(state.cartItems);
    return {
        items: state.cartItems,
    }
}

export default connect(mapStateToProps, { getCartItems })(Navbar);