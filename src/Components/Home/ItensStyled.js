import styled from "styled-components";

export const Div = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export const Superior = styled.section `
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    
    select {
        width: 100px;

    }

`


export const Mercado = styled.div `
    display: flex;
    margin: 10px;
    width: 200px;
    text-align: justify;
    height: 310px;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    padding: 1px;
    
    button {
        padding: 3px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
    }

    button:hover {
        border: 2px solid black;

    }
   
 
`

export const IMG = styled.img `
    margin-left: 2px;
    width: 200px;
    object-fit: cover;
    height: 200px;
    
`
export const DescriptionProduct = styled.p `
    font-size: 12px;
    text-align: center;
    margin: 10px 15px;
`

export const Price = styled.h4 `
    text-align: center;
    font-size: 15px;
`

