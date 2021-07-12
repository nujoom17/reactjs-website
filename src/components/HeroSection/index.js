import React,{useState,useEffect,useCallback} from 'react';
import Video from '../../videos/video1.mp4';
import { HeroContainer, VideoBg, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';


const HeroSection = () => {
    const [hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover);
    };

    const names = [
    'State-of-the-art Technology. Accessible at your fingertips. At the most competitive prices', 'Unmatched creativity and expertise in the technology industry', 'Prompt after-sales satisfaction guarantee. Trusted by over 100+ clients worldwide','Fully personalized scheduling and service packages. Keeping you in mind']


    const [newName, setnewName] = useState(names[0]);
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 4000);
        return () => clearInterval(intervalID);
    }, [shuffle])


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>   
            <HeroContent>
                <HeroH1>Cutting Edge Innovation</HeroH1>
                <HeroP>
                    <h4 className="banner-text">{newName}</h4>
                </HeroP>
                <HeroBtnWrapper>
                    <Button className='sign-btn' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>  
                        Get Started {hover? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                </HeroContent>      
        </HeroContainer>
    );
};

export default HeroSection;
