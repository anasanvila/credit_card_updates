import React from 'react';
import {SmallCardStyle, Type, Num, Name, Date, ID
} from '../styles/smallCardStyle'

const SmallCard = ({card, setId}) => {
    return (
    <SmallCardStyle onClick={()=>setId(card.id)}>
        <Type>{card.type}</Type> 
        <Num>{card.cardNumber}</Num>
        <Name>{card.name}</Name> 
        <Date>{card.expireDate}</Date>  
        <ID>( {card.id} )</ID>  
    </SmallCardStyle>);
}
 
export default SmallCard;