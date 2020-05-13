import React from 'react';
import PaymentForm from './paymentForm'
import PropTypes, { number } from 'prop-types'
import {defineType} from './utils.js'
import {PaymentsWrapper, Label} from '../styles/paymentFormStyle'

class EditCard extends React.Component {
    addPropertyToData=(data)=>{
        data.newCard=false;
        data.id=this.props.cardId;
        data.type=defineType(data.cardNumber);
        this.props.saveCardData(data);
    }
    render(){
    return (
        <PaymentsWrapper>
            <Label>ADD NAME, CARD NUMBER AND EXPIRE DATE</Label>
            <PaymentForm saveCardData={this.addPropertyToData}/>
        </PaymentsWrapper>
    );
    }
}

EditCard.propTypes = {
    cardId: PropTypes.number,
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
    saveCardData: PropTypes.func,
    staticContext: PropTypes.any
}

export default EditCard;