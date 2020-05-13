import React from 'react';
import {Link, Route} from "react-router-dom"
import PropTypes from "prop-types"
import EditCard from './editCard'
import {Row,ButtonWrapper,EditRemoveButtons} from '../styles/buttonsStyle'
import edit from '../images/edit.png'

import remove from '../images/remove.png'
import deleteAll from '../images/deleteAll.png'
import BigCardDesign from './bigCardDesign'

class Card extends React.Component{
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
            <ButtonWrapper onClick={this.props.remove} >
              <Link to={`/cards`}>
                <img src={remove} alt="remove" height="35" />
              REMOVE
              </Link>
            </ButtonWrapper>
            <ButtonWrapper onClick={this.props.removeAll}>
              <Link to={`/cards`}>
                <img src={deleteAll} alt="clear-all" height="35"/>
              CLEAR ALL
              </Link>
            </ButtonWrapper>
          </EditRemoveButtons>
        </Row>
        <Route path={`${this.props.match.path}/edit`} component={props =><EditCard {...props} cardId={card.id} saveCardData={this.props.saveCardData}/>}/>
        </React.Fragment>
      );
    }
}

Card.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  remove: PropTypes.func,
  removeAll: PropTypes.func,
  card: PropTypes.object,
  saveCardData: PropTypes.func,
  staticContext: PropTypes.any
}
 
export default Card;