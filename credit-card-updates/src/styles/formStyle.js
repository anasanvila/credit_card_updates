import styled from 'styled-components'

export const FormWrapper = styled.div`
    padding-left:20px;
    margin-top:15px;
    width:629px;
`
export const InputBox = styled.div`
    & > input {
        height:28px;
        width:389px;
        border-radius:5px;
        padding-left:10px;  
    }
`
export const SubmitButton = styled.div`
    margin-left:31px;
    position:relative;
    & > input {
        width:94px;
        min-height:122px;
        border-radius:10px;
        font-size:16px;
        padding-top: 50px;
        background-color:#edf7ffe3;
        box-shadow: 7px 9px 17px -2px rgba(81,110,78,0.4);
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }

`
export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    margin-bottom:12px;
`
export const LabelStyle = styled.div`
    width:100px;
    margin-top:5px;
`
export const ValidationStatusImg = styled.div`
    width:26px;
    margin-left: -40px;
    margin-top:5px;
    height:27px;
    background-image: url(${({ background }) => background});
`
export const Message = styled.div`
    width:92%;
    padding:0 16px;
    min-height:50px;
    border-radius:10px;
    margin-top:17px;
    background-color:#ffffff85;
    border: 2px solid lightsteelblue;

    @media (min-height: 740px){
        height: 126px;
    }
`
export const Column = styled.div`
    display:flex;
    flex-direction:row;
`
export const Img = styled.div`
    position:absolute;
    z-index:2;
    width:20px;
    height:20px;
    & > img {
        width: 40px;
        margin-left:15px;
        margin-top:25px;
    }
`