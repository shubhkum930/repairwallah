import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate, useNavigation } from 'react-router-dom';
import "./header.css"

export default function Header( ) {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    return (
      <div className="header">
        <div className="logo">
          <p>Repair wallah</p>
        </div>
  
        <div className="menu" onClick={() => setShowMenu(!showMenu)}>
          <AiOutlineMenu className="icon" />
        </div>
  
        <div className="header-items">
          <p  onClick={() => navigate("/home")}>Home</p>
  
          <p  onClick={() => navigate("/about-us")}>About Us</p>
  
          <p onClick={() => navigate("/contact-us")}>Contact Us</p>
  
          <div className="call"> Call</div>
        </div>
  
        {
          // Show menu on click
          showMenu ? (
            <div className="menu-items">
              <p>Explore</p>
               <p> About Us</p>
                <p onClick={() => navigate("/contact-us")}> Contact us</p>
  
              <div className="call"> Call</div>
            </div>
          ) : null
        }
      </div>
  
  
    );
}
