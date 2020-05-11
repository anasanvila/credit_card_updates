import React from 'react';
import chip from '../images/chip.jpg'
import visa from '../images/visa.png'
import mastercard from '../images/mastercard.png'
import discover from '../images/discover.png'
import { BigCardStyle,Type,Num,Name,Date,Chip,
    ID} from '../styles/bigCardStyle'

const BigCardDesign = ({card}) => {
    let type;
    let logoWidth;
    switch (card.type) {
        case "visa": type=visa; logoWidth=70; break;
        case "masterCard": type=mastercard; logoWidth=70; break;
        case "discover": type=discover; logoWidth=100; break;
    }
    return (
    <BigCardStyle>
        <ID>( {card.id} )</ID>
        <Type><img src={type} alt={type} width={logoWidth}/></Type>
        <Chip><img src={chip} alt="chip" width="60"/></Chip>
        <Num>{card.cardNumber}</Num>
        <Name>{card.name}</Name> 
        <Date>{card.date}</Date>  
    </BigCardStyle>
    )
}
 
export default BigCardDesign;