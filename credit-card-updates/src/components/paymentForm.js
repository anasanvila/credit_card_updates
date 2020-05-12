import React from 'react';
import {css} from 'styled-components'
import { Formik, Field} from 'formik';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

export default function PaymentForm() {
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    wrapperProps 
  } = usePaymentInputs();
 
  return (
    <Formik
      initialValues={{
        cardNumber: '',
        expiryDate: '',
      }}
      onSubmit={data => console.log(data)}
      validate={() => {
        let errors = {};
        if (meta.erroredInputs.cardNumber) {
          errors.cardNumber = meta.erroredInputs.cardNumber;
        }
        if (meta.erroredInputs.expiryDate) {
          errors.expiryDate = meta.erroredInputs.expiryDate;
        }
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <PaymentInputsWrapper {...wrapperProps}
              styles={{
                inputWrapper:{
                  base:css`
                    width:100%;
                    border:none;
                    & :  nth-child(1) {
                      margin-top:-3px;
                      width:280px;
                    }
                  `
                },
                input: {
                  base:css`
                    border:none;
                    text-transform:uppercase;
                  `
                }
              }}
            >
            <Field name="Name">
                    {({
                          field, // { name, value, onChange, onBlur }
                          form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          meta,
                      }) => (
                        <div>
                            <input type="text" placeholder="Name" {...field} />
                            {meta.touched && meta.error && (
                                <div className="error">{meta.error}</div>
                            )}
                        </div>
                    )}
                </Field>
                <br/>
            <Field name="cardNumber">
                {({ field }) => (
                  
                    <input {...getCardNumberProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                  
                )}
              </Field>
              <br/>
              <Field name="expiryDate">
                {({ field }) => (
                    <input {...getExpiryDateProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                )}
              </Field>
            </PaymentInputsWrapper>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}