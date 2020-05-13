import React from 'react';

export const defineType=(cardNumber)=>{
    let char=cardNumber.charAt(0);
    let type;
    switch (char) {
        case '4': type = 'visa'; break;
        case '5': type = 'masterCard'; break;
        case '6': type = 'discover'; break;
        default: type = ''
    }
    return type; 
}