import React from 'react';
import {cardsJson} from '../cardsJson'
import {SmallCardStyle, Type, Num, Name, Date, ID
} from '../styles/smallCardStyle'

const SmallCard = ({id}) => {
    const card = cardsJson.find(card=>card.id===id)
    console.log("card=",card)
    return (
    <SmallCardStyle>
        <Type>{card.type}</Type> 
        <Num>{card.cardNumber}</Num>
        <Name>{card.name}</Name> 
        <Date>{card.date}</Date>  
        <ID>( {card.id} )</ID>  
    </SmallCardStyle>);
}
 
export default SmallCard;