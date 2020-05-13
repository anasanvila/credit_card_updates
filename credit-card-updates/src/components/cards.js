import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from './card'
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

class Cards extends React.Component{
  constructor(props){
      super(props);
      this.state={
        cardsArray:[],
        counterId:0,
        selectedCardId:0
      }
  }
  saveCardData = (data)=>{
      const cardData={
        id:data.newCard===true?this.state.counterId:data.id,
        name:data.name,
        type:data.type,
        cardNumber:data.cardNumber,
        expiryDate:data.expiryDate,
      }
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
          cardsArray:[],
          counterId: 0
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
    if (localStorage["counterId"]) {
        let id = localStorage.getItem("counterId");
        let counter = JSON.parse(id)
        this.setState({
          counterId: counter,
        })
    }
  }
  componentDidUpdate(){
      localStorage.setItem("cards", JSON.stringify(this.state.cardsArray))
      localStorage.setItem("counterId", JSON.stringify(this.state.counterId))
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

Cards.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
  staticContext: PropTypes.any
}
 
export default Cards;