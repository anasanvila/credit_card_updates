import styled from 'styled-components'
import {css} from 'styled-components'

export const paymentStyle = {
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
}

export const PaymentsWrapper = styled.div`
    margin-left:20px;
    margin-top:50px;
    position:relative;
`
export const Label = styled.div`
    position:absolute;
    top:-30px;
    left:8px;
`
export const ErrorMessage = styled.div`
    position:absolute;
    top:50px;
`