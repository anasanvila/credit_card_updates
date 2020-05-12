import React from 'react';
import BigCardDesign from './bigCardDesign'
import FormDesign from './formDesign'
import {Space, card} from '../styles/addCardStyle'
import PaymentForm from './paymentForm'
import {PaymentsWrapper, Label} from '../styles/paymentFormStyle'

const AddCard = () => {
    console.log("ADD")
    return (
        <React.Fragment>
            <BigCardDesign card={card} />
            <Space/>
            <PaymentsWrapper>
                <Label>ADD NAME, CARD NUMBER AND EXPIRE DATE</Label>
                <PaymentForm/>
            </PaymentsWrapper>
        </React.Fragment>
    );
}
 
export default AddCard;