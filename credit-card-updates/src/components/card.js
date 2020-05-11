import React from 'react';
import {Link, Route} from "react-router-dom"
import EditCard from './editCard'
import {Row,ButtonWrapper,EditRemoveButtons} from '../styles/buttonsStyle'
import edit from '../images/edit.png'

import remove from '../images/remove.png'
import deleteAll from '../images/deleteAll.png'
import BigCardDesign from './bigCardDesign'
import {cardsJson} from '../cardsJson'

const Card = ({match}) => {
  const card = cardsJson.find(c=>c.id==match.params.cardId);
    return (
      <React.Fragment>
        <Row>
          <BigCardDesign card={card} />
          <EditRemoveButtons>
            <Link to={`${match.url}/edit`}>
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
        <Route path={`${match.path}/edit`} component={EditCard}/>
        </React.Fragment>
      )
}
 
export default Card;