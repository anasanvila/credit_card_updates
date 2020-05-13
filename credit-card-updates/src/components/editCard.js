import React from 'react';
import PaymentForm from './paymentForm'
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
 
export default EditCard;