import React from 'react';
import visa from '../images/visa.png'
import mastercard from '../images/mastercard.png'
import discover from '../images/discover.png'
import {SmallCardStyle, Type, Num, Name, Date, ID
} from '../styles/smallCardStyle'

const SmallCard = ({card, setId}) => {
    const cardType = {
        'visa':visa,
        'masterCard':mastercard,
        'discover':discover
    }
    return (
    <SmallCardStyle onClick={()=>setId(card.id)}>
        <Type>
            <img src={cardType[card.type]} alt={card.type} 
                width={card.type==="discover"?60:40}/>
        </Type> 
        <Num>{card.cardNumber}</Num>
        <Name>{card.name}</Name> 
        <Date>{card.expiryDate}</Date>  
        <ID>( {card.id} )</ID>  
    </SmallCardStyle>);
}
 
export default SmallCard;