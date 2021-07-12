import React from 'react';
import { 
    FooterContainer,
    FooterLink,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
 } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Organization</FooterLinkTitle>
                                <FooterLink to="/">Our Projects</FooterLink>
                                <FooterLink to="/">How it Works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Regulations</FooterLink>
                                </FooterLinkItems>
                            <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">LinkedIn</FooterLink>
                                <FooterLink to="/">YouTube</FooterLink>
                                <FooterLink to="/">LinkedIn</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Our Offices</FooterLink>
                                <FooterLink to="/">Phone</FooterLink>
                                <FooterLink to="/">Report Grievance</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                            </FooterLinkItems>  
                            <FooterLinkItems>  
                            <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to="/">Consulting</FooterLink>
                                <FooterLink to="/">Tutorials</FooterLink>
                                <FooterLink to="/">Artificial Intelligence</FooterLink>
                                <FooterLink to="/">Enterprise Applications</FooterLink>
                                <FooterLink to="/">Quality Engineering</FooterLink>
                                <FooterLink to="/">Affiliate Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
