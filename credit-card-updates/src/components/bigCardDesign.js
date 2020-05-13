import React from 'react';
import chip from '../images/chip.jpg'
import visa from '../images/visa.png'
import mastercard from '../images/mastercard.png'
import discover from '../images/discover.png'
import { BigCardStyle,Type,Num,Name,Date,Chip,
    ID} from '../styles/bigCardStyle'

const BigCardDesign = ({card}) => {
  const cardType = {
      'visa':visa,
      'masterCard':mastercard,
      'discover':discover
  }
    return (
    <BigCardStyle>
        <ID>( {card.id} )</ID>
        <Type>
            <img src={cardType[card.type]} alt={card.type} 
                width={card.type==="discover"?100:70}/>
        </Type>
        <Chip><img src={chip} alt="chip" width="60"/></Chip>
        <Num>{card.cardNumber}</Num>
        <Name>{card.name}</Name> 
        <Date>{card.expiryDate}</Date>  
    </BigCardStyle>
    )
}
 
export default BigCardDesign;