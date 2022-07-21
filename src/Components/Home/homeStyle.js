import styled from "styled-components"


export const Side  = styled.aside `
display: flex;
width: 100%;
height: 95vh;
flex-direction: column;
border: 1px solid black;
padding: 10px;
input{
    border-radius: 2px 2px 2px 2px;
    padding: 2px;
    width: 200px;
}

input:hover{
    border: 2px  solid yellow;
    
}



`

export const Container = styled.div `
display: flex;
justify-content: space-between;
width: 100%;
height: 100%;
border: 1px solid black;
`




