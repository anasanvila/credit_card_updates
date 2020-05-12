import React from 'react';
import {FormWrapper, InputBox, Column, Img, SubmitButton, Row, Message, LabelStyle, ValidationStatusImg} from '../styles/formStyle'
import yes from '../images/e.svg'
import no from '../images/g.svg'
import submitImg from '../images/check.png'
import MaskInput from 'react-maskinput';

class FormDesign extends React.Component {

    render(){
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
                        <InputBox>
                            <MaskInput alwaysShowMask maskChar="X" mask="0000  0000  0000  0000" size={20} onChange={this.onChange}/>
                        </InputBox>
                        <ValidationStatusImg background={no}/>
                    </Row>
                    <Row>
                        <LabelStyle>EXPIRES ON:</LabelStyle>
                        <InputBox>
                            <MaskInput alwaysShowMask onChange={this.onChange2} maskString={'MM.YY'} mask={'00/00'} size={20} />
                        </InputBox>
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
}
 
export default FormDesign;