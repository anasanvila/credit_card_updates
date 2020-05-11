import React from 'react';
import BigCardDesign from './bigCardDesign'
import FormDesign from './formDesign'
import {Space, card} from '../styles/addCardStyle'

const AddCard = () => {
    console.log("ADD")
    return (
        <React.Fragment>
            <BigCardDesign card={card} />
            <Space/>
            <FormDesign/>
        </React.Fragment>
    );
}
 
export default AddCard;