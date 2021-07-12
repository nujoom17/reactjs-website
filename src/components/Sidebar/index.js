import React from 'react';
import { SidebarContainer, Icon,CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="products-and-services" onClick={toggle} isOpen={!isOpen} smooth={true}  duration={700} spy={true} exact="true" offset={100}>Products & Services</SidebarLink>
                    <SidebarLink to="support" onClick={toggle} isOpen={!isOpen} smooth={true}  duration={700} spy={true} exact="true" offset={-220}>Support</SidebarLink>
                    <SidebarLink to="about" onClick={toggle} isOpen={!isOpen} smooth={true}  duration={700} spy={true} exact="true" offset={100}>About Us</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/sign-in" className="sign-btn">Sign Up/Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
