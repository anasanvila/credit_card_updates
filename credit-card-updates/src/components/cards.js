import React from 'react';
import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import Card from './card';
import {cardsJson} from '../cardsJson.js';
import AddCard from './addCard'
import SmallCard from './smallCard'
import addCard from '../images/add.png'
import {
    WrapperForCards, 
    WrapperForChosenCard,
    Wrapper,OtherCards,
    EmptySmallCardStyle,
    AddCardIcons
} from '../styles/cardsStyle'
import card from '../images/money.png'

const  Cards = ({match}) => {
    console.log("Match from Cards =",match)
  return (
    <Wrapper>
        <WrapperForCards>
        <EmptySmallCardStyle>
            <Link to={`${match.url}/add`}>
                    <img src={addCard} alt="add-card" width="45"  />
                    <AddCardIcons>
                        <img src={card} alt="card"  width="35" />
                        ADD CARD
                    </AddCardIcons>
            </Link></EmptySmallCardStyle>
        <OtherCards>
             {cardsJson.map(({ name, id }) => (
                <Link to={`${match.path}/${id}`}>
                <SmallCard id={id}/></Link>
            ))}
        </OtherCards>
            <br/>
        </WrapperForCards>
        <WrapperForChosenCard>
            <Switch>
                <Route path={`${match.path}/add`} component={AddCard}/>
                <Route path={`${match.path}/:cardId`} component={Card}/>
            </Switch>
        </WrapperForChosenCard>
      </Wrapper>
  )
}
 
export default Cards;