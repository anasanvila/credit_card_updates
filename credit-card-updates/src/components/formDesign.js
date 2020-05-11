import React from 'react';
import {FormWrapper, InputBox, Column, Img, SubmitButton, Row, Message, LabelStyle, ValidationStatusImg} from '../styles/formStyle'
import yes from '../images/e.svg'
import no from '../images/g.svg'
import submitImg from '../images/check.png'

const FormDesign = () => {
    return (
        <FormWrapper>
            <form>
                <Column>
                <div>
                    <Row>
                        <LabelStyle>NAME:</LabelStyle>
                        <InputBox><input type="text" name="name" /></InputBox>
                        <ValidationStatusImg background={yes}/>
                    </Row>
                    <Row>
                        <LabelStyle>CARD NUM:</LabelStyle>
                        <InputBox><input type="number"  name="num" /></InputBox>
                        <ValidationStatusImg background={no}/>
                    </Row>
                    <Row>
                        <LabelStyle>EXPIRES ON:</LabelStyle>
                        <InputBox><input type="date"  name="exp" /></InputBox>
                        <ValidationStatusImg background={yes}/>
                    </Row>
                </div>
                <SubmitButton>
                    <Img><img src={submitImg} alt="img"/></Img>
                    <input type="submit" value="SUBMIT" name="submit" 
                   />
                </SubmitButton>
                </Column>
            </form>
            <Message>abc</Message>
        </FormWrapper>
      );
}
 
export default FormDesign;