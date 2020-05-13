import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Card from './card';
import AddCard from './addCard'
import SmallCard from './smallCard'
import addCard from '../images/add.png'
import {
    WrapperForCards, 
    WrapperForChosenCard,
    Wrapper,
    CardsContainer,
    EmptySmallCardStyle,
    AddCardIcons
} from '../styles/cardsStyle'
import card from '../images/money.png'

class  Cards extends React.Component{
  constructor(props){
      super(props);
      this.state={
        cardsArray:[
            {
              name: 'Ana Djordjevic',
              id: 0,
              cardNumber:'1456 1298 6574 1287',
              expiryDate:"02/22",
              type:"visa"
            },
            {
              name: 'Aleksandra Djordjevic',
              id: 1,
              cardNumber:'1456 1298 6574 1287',
              expiryDate:"08/21",
              type:"masterCard"
            },
            {
              name: 'Jane Doe',
              id: 2,
              cardNumber:'1456 1298 6574 1287',
              expiryDate:"06/22",
              type:"discover"
             },
        
          ],
        counterId:3,
        card:{
            id:2,
            name:'',
            cardNumber:'',
            expiryDate:'',
            type:'',
            newCard:false,
        }
      }
  }
  saveCardData = (data)=>{
      console.log("data=",data);
      let cardData={
        id:data.newCard===true?this.state.counterId:data.id,
        name:data.name,
        type:data.type,
        cardNumber:data.cardNumber,
        expiryDate:data.expiryDate,
        newCard:data.newCard,
      }
      console.log("cardData",cardData)
      this.setState(prevState=>{
          let newCardsArray;
          if (data.newCard===true) newCardsArray = [ ...prevState.cardsArray,cardData] 
          else {
            newCardsArray=[...prevState.cardsArray].map(card=>card.id===cardData.id?cardData:card)
          }
          return {
              cardsArray:newCardsArray,
              data:cardData,
              counterId:data.newCard===true?prevState.counterId+1:prevState.counterId
            }
      })
  }
  setId=(id)=>{
      console.log("id",id)
    this.setState(prevState=>({
        card:{
            ...prevState.card,
            id:id
        }
    }))
  }
  render(){
    const {match} = this.props;
    console.log("data: ",this.state.data)
  return (
    <Wrapper>
        <WrapperForCards>
        <EmptySmallCardStyle>
            <Link to={`${match.url}/add`} key="add">
                <img src={addCard} alt="add-card" width="45"  />
                <AddCardIcons>
                    <img src={card} alt="card"  width="35" />
                    ADD CARD
                </AddCardIcons>
            </Link>
        </EmptySmallCardStyle>
        <CardsContainer>
             {this.state.cardsArray.map(card => (
                <Link to={`${match.path}/${card.id}`} key={card.id}>
                <SmallCard card={card} setId={this.setId}/></Link>
            ))}
        </CardsContainer>
            <br/>
        </WrapperForCards>
        <WrapperForChosenCard>
            <Switch>
                <Route path={`${match.path}/add`} component={()=><AddCard cardId={this.state.counterId} saveCardData={this.saveCardData}/>}/>
                <Route path={`${match.path}/:cardId`} component={props=><Card {...props} card={this.state.cardsArray.find(c=>c.id===this.state.card.id)}
                saveCardData={this.saveCardData}/>}/>
            </Switch>
        </WrapperForChosenCard>
      </Wrapper>
  )
}
}
 
export default Cards;