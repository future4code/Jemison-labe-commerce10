import React from 'react'
import styled from 'styled-components'
import { Itens } from './Itens'

const Side  = styled.aside `
    display: flex;
    width: 40vw;
    height: 95vh;
    flex-direction: column;
    border: 2px solid black;
    padding: 10px;
    input{
        border-radius: 2px 2px 2px 2px;
        padding: 2px;
    }

    input:hover{
        border: 2px  solid yellow;
        
    }

    

`

const Container = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border: 2px solid black;
`



const Home = () => {
  return (
    <Container>
        <Side>
            <label>Pesquisar</label>
            <input className='busca' placeholder='Pesquisar'/>
            <label>Preço minimo:</label>
            <input className='busca' placeholder='Min.'/>
            <label>Preço máximo:</label>
            <input className='busca' placeholder='Max.'/>
        </Side>
        <Itens/>
        <Side>
            <h1>Carrinho</h1>
            <p>Valor total: R$0,00</p>
        </Side>
    </Container>
  )
}

export default Home



