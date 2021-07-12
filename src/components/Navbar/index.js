import React,{useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn, NavBtnLink } from './NavbarElements';
import emblem from '../../images/preview.jpg';
import { animateScroll as scroll } from 'react-scroll';




const Navbar = ({toggle}) => {
   
    const toggleHome = () => {
     scroll.scrollToTop();
 };
   
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <img class="logo-img" src={emblem} alt="logo"></img>
                    <h4 style={{paddingLeft: 10}}>NUJMOSITY<sup style={{fontSize: "small"}}>&#xae;</sup>
                    <br/><p class="subtext">TECHNOLOGIES</p></h4>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="products-and-services" smooth={true}  duration={600} spy={true} exact="true" offset={-20}>
                            Products & Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="support" smooth={true} duration={600} spy={true} exact="true" offset={-75}>Support</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={600} spy={true} exact="true" offset={-50}>About Us</NavLinks>
                    </NavItem>
                    
                </NavMenu>
                 <NavBtn className="sign-btn">
                        <NavBtnLink exact to="/sign-in">Sign Up / Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
