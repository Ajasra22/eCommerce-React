import React from 'react';
import { useLocation } from 'react-router-dom';

import '../css/Footer.css';
const Footer = () => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);
    return (
        <div className="Footer">
            <img src="/images/shoplogo.jfif" />
            <div className="mainInfo">
                <div className="copyrightAndName">
                    <i class="copyright outline icon big"></i>
                    <span className="year">2021 - </span>
                    {path == '/graphics-card'? < h1>Abhinandan</h1>:<img src="/images/myname.png"/>}
                </div>
                <div className="icons">
                    {/* <i class="envelope icon huge"></i> */}
                    {/* <i class="facebook icon"></i> */}
                    <a href="https://www.facebook.com/ThePiyushSharan" target="_blank">
                        <i class="facebook f icon huge"></i>
                    </a>
                    <a href="https://github.com/pi-sharan" target="_blank">
                        <i class="github icon huge"></i>
                    </a>
                    {/* <i class="instagram icon huge"></i> */}
                    <a href="https://www.linkedin.com/in/piyush-sharan-16456645/" target="_blank">
                        <i class="linkedin icon huge"></i>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Footer;