import React from 'react';
//import FormDesign from './formDesign'
import PaymentForm from './paymentForm'
import {PaymentsWrapper, Label} from '../styles/paymentFormStyle'

const EditCard = ({match}) => {
    console.log("match from edit", match)
    return (
    <PaymentsWrapper>
        <Label>ADD NAME, CARD NUMBER AND EXPIRE DATE</Label>
        <PaymentForm/>
    </PaymentsWrapper>
    )
}
 
export default EditCard;