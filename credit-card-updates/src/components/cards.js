import React from 'react';
import {Link, Route, Switch, Redirect, useLocation} from 'react-router-dom';
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
        cardsArray:[],
        counterId:0,
        selectedCardId:0
      }
  }
  saveCardData = (data)=>{
      console.log("data=",data);
      const cardData={
        id:data.newCard===true?this.state.counterId:data.id,
        name:data.name,
        type:data.type,
        cardNumber:data.cardNumber,
        expiryDate:data.expiryDate,
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
  remove = () => {
      let newCardsArray;
      this.setState(prevState=>{
        newCardsArray=[...prevState.cardsArray].filter(card=>card.id!==this.state.selectedCardId)
        return {
            cardsArray: newCardsArray
        }
      })
  }
  removeAll = () => {
      this.setState({
          cardsArray:[]
      })
  }
  setId=(id)=>{
    this.setState({selectedCardId:id})
  }
  componentDidMount(){
    if (localStorage["cards"] ) {
        let cards = localStorage.getItem("cards")
        let tempArr = JSON.parse(cards)
        this.setState({
            cardsArray:[...tempArr]
        })
    }
  }
  componentDidUpdate(){
      localStorage.setItem("cards", JSON.stringify(this.state.cardsArray))
  }
  render(){
    const {match} = this.props;
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
                <Route path={`${match.path}/:cardId`} component={props=><Card {...props} remove={this.remove} removeAll={this.removeAll} card={this.state.cardsArray.find(c=>c.id===this.state.selectedCardId)}
                saveCardData={this.saveCardData}/>}/>
            </Switch>
        </WrapperForChosenCard>
      </Wrapper>
  )
}
}
 
export default Cards;