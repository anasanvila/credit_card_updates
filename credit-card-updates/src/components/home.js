import React from 'react';
import creditCards from '../images/creditCards.jpg'
import { ImgContainer } from '../styles/homeStyle'

const Home = () => {
    return (
        <React.Fragment>
            <h1>Home.</h1>
            <ImgContainer>
                <img src={creditCards} alt="credit cards"/>
            </ImgContainer>
        </React.Fragment>
    );
}
 
export default Home;