import styled from 'styled-components'

export const LinkStyle=styled.div`
    text-decoration-line:none;
    padding:25px;
    //background-color:#fcffb88a;
    &>a{
        text-decoration-line:none;
    }
    @media (max-height:740px) {
        padding:16px;
    }
    &:hover{
        background-color:#fcffb88a;
    }
`
export const H1=styled.h1`
    display:inline-block;
    margin:0;
    color:midnightblue;
    
`
export const Hr=styled.hr`
    width:92%;
    margin-left:0;
`