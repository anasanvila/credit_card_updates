import styled from 'styled-components'

export const WrapperForCards=styled.div`
    margin:5px 10px 0 0;
    background-color:#c0f1e0;
`
export const WrapperForChosenCard=styled.div`
    margin:5px 0 0 10px;
    background-color:#cfd9e4d6;
    margin:5px;
`
export const Wrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:90%;
    margin-left:0px;
`
export const CardsContainer=styled.div`
    overflow-y:scroll;
    height:51vh;
`
export const EmptySmallCardStyle=styled.div`
    border:2px solid LIGHTSLATEGRAY;
    border-radius:10px;
    box-shadow: 7px 9px 17px -2px rgba(81,110,78,0.4);
    position:relative;
    text-decoration-line:none;
    display:block;
    width:200px;
    height:100px;
    margin:10px;
    margin-bottom:40px;
    background-color:MINTCREAM;
    padding:13px;
    color:lightsteelblue;
    
    &>a{
        text-decoration-line:none;
        position:absolute;
        top:25px;
        left:91px;
    }
`
export const AddCardIcons=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:120px;
    margin-left:-35px;
`