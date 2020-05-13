import React from 'react';
import {Link, Route} from "react-router-dom"
import EditCard from './editCard'
import {Row,ButtonWrapper,EditRemoveButtons} from '../styles/buttonsStyle'
import edit from '../images/edit.png'

import remove from '../images/remove.png'
import deleteAll from '../images/deleteAll.png'
import BigCardDesign from './bigCardDesign'

class Card extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
  const card = this.props.card;
    return (
      <React.Fragment>
        <Row>
          <BigCardDesign card={card} />
          <EditRemoveButtons>
            <Link to={`${this.props.match.url}/edit`}>
              <img src={edit} alt="edit" height="35" />EDIT
            </Link>
            <ButtonWrapper>
              <img src={remove} alt="remove" height="35" />
              REMOVE
            </ButtonWrapper>
            <ButtonWrapper>
              <img src={deleteAll} alt="clear-all" height="35"/>
              CLEAR ALL
            </ButtonWrapper>
          </EditRemoveButtons>
        </Row>
        <Route path={`${this.props.match.path}/edit`} component={props =><EditCard {...props} cardId={card.id} saveCardData={this.props.saveCardData}/>}/>
        </React.Fragment>
      );
    }
}
 
export default Card;