import styled from 'styled-components'

export const Row=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
`
export const ButtonWrapper=styled.div`
  opacity:0.7;
`
export const EditRemoveButtons=styled.div`
  margin:12px 16px;
  width: 65px;
  //border: 2px solid lightsteelblue;
  border-radius:10px;
  background-color:#edf7ffe3;
  box-shadow: 7px 9px 17px -2px rgba(81,110,78,0.4);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:15px;
  &>a{
    text-decoration:none;
  }
`