import React from 'react';
import PropTypes from 'prop-types'
import BigCardDesign from './bigCardDesign'
import {Space} from '../styles/addCardStyle'
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
    emptyCard = {
        id:0,
        name:'Name',
        cardNumber:'0000 0000 0000 0000',
        expiryDate:'00/00',
        type:'',
        newCard:false,
    }
    render(){
    return (
        <React.Fragment>
            <BigCardDesign card={this.emptyCard} />
            <Space/>
            <PaymentsWrapper>
                <Label>ADD NAME, CARD NUMBER AND EXPIRE DATE</Label>
                <PaymentForm saveCardData={this.addPropertyToData}/>
            </PaymentsWrapper>
        </React.Fragment>
    );
    }
}

AddCard.propTypes = {
    cardId: PropTypes.number,
    saveCardData: PropTypes.func
}
 
export default AddCard;