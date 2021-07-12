import React from 'react';
import Icon1 from '../../images/Partner.svg'
import Icon2 from '../../images/FAQ.svg'
import Icon3 from '../../images/Contact.svg'
import Icon4 from '../../images/TandC.svg'
import { 
    SupportContainer,
    SupportH1,
    SupportWrapper,
    SupportCard,
    SupportH2,
    SupportIcon,
    SupportP
 } from './SupportElements';


const Support = () => {
    return (
        <SupportContainer id="support">
            <SupportH1>Support</SupportH1>
            <SupportWrapper>
                <SupportCard>
                    <SupportIcon src={Icon1}/>
                    <SupportH2>Become our Partner</SupportH2>
                    <SupportP></SupportP>
                </SupportCard>
                <SupportCard>
                     <SupportIcon src={Icon2}/>
                     <SupportH2>Frequently Asked Questions</SupportH2>
                     <SupportP></SupportP>
                </SupportCard>
                 <SupportCard>
                     <SupportIcon src={Icon3}/>
                     <SupportH2>Contact Us</SupportH2>
                     <SupportP></SupportP>
                </SupportCard>
                <SupportCard>
                     <SupportIcon src={Icon4}/>
                     <SupportH2>Our Terms and Conditions</SupportH2>
                     <SupportP></SupportP>
                </SupportCard>
            </SupportWrapper>
        </SupportContainer>
    )
}

export default Support;
