import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {homeObjOne} from '../components/InfoSection/Data';
import {homeObjTwo} from '../components/InfoSection/Data-2';
import {homeObjFour, homeObjThree} from '../components/InfoSection/Data-3';
import Support from '../components/Support';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import {animateScroll as scroll} from 'react-scroll'
const Home = () => {
    const [isOpen,setIsOpen]= useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        scroll.scrollToTop();
    },[])
    
    
    return (
        <React.StrictMode>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Support />
            
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer/>
            
        </React.StrictMode>
    )
}

export default Home;
