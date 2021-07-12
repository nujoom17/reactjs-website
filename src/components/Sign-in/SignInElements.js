import styled from 'styled-components';
import  {Link} from 'react-router-dom';

export const SignInContainer =styled.div`
position: relative;
border-radius: 5px;
background-color: #4B0082;
padding: 20px 10px 30px 10px;

@media screen and (max-width:480px){
  padding: 5px 5px  5px 5px; 

}
`


export const SignInColumn=styled.div`
display: flex;
align-self: center;
justify-content: space-between;
display: grid;
grid-template-columns: 1fr;
padding: 20px 150px 30px 150px;

@media screen and (max-width: 480px){
  padding: 20px 20px 20px 20px;

}
`

export const Icon=styled(Link)`
  margin-left: 32px;
  margin-top: 0px;
  

  @media screen and (max-width: 480px){
      margin-left: 16px;
      margin-top: 8px;
  }
  `

export const Form=styled.form`
background-color: lightcyan;
max-width:800px;
height:auto;
width:100%;
z-index:1;
display: grid;
margin: 0 auto;
transition: ease-in 1s;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 2px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px){
  padding: 32px 32px;
  max-width: 400px;
}`


