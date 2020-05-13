import React from 'react';
import { paymentStyle, ErrorMessage } from '../styles/paymentFormStyle' 
import { Formik, Field } from 'formik';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

export default function PaymentForm({saveCardData}) {
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    wrapperProps,
  } = usePaymentInputs();
 
  return (
    <Formik
      initialValues={{
        cardNumber: '',
        expiryDate: '',
      }}
      onSubmit={data => {
        if (data.name) return saveCardData(data)
      }}
      validate={() => {
        let errors = {};
        if (meta.erroredInputs.cardNumber) {
          errors.cardNumber = meta.erroredInputs.cardNumber;
        }
        if (meta.erroredInputs.expiryDate) {
          errors.expiryDate = meta.erroredInputs.expiryDate;
        }
        console.log("err",errors);
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <PaymentInputsWrapper {...wrapperProps}
              styles={paymentStyle}
            >
            <Field name="name">
                    {({
                          field,
                          form: {touched, errors}, 
                          meta,
                      }) => (
                        <div>
                            <input type="text" placeholder="Name" {...field} />
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