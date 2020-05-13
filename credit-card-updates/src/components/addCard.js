import React from 'react';
import BigCardDesign from './bigCardDesign'
import {Space, card} from '../styles/addCardStyle'
import {defineType} from './utils'
import PaymentForm from './paymentForm'
import {PaymentsWrapper, Label} from '../styles/paymentFormStyle'

class AddCard extends React.Component {
    addPropertyToData=(data)=>{
        data.newCard=true;
        data.id=this.props.cardId;
        data.type=defineType(data.cardNumber);
        this.props.saveCardData(data);
    }
    render(){
    return (
        <React.Fragment>
            <BigCardDesign card={card} />
            <Space/>
            <PaymentsWrapper>
                <Label>ADD NAME, CARD NUMBER AND EXPIRE DATE</Label>
                <PaymentForm saveCardData={this.addPropertyToData}/>
            </PaymentsWrapper>
        </React.Fragment>
    );
    }
}
 
export default AddCard;