import React, { useState } from 'react'
import { Side } from './homeStyle'
import { Container } from './homeStyle'
import { Itens } from './Itens'


export const Home = () => {

    

  return (
    <Container>
        <Side>
            <label>Pesquisar</label>
            <input className='busca'  placeholder='Pesquisar'/>
            <label>Preço minimo:</label>
            <input type='number'className='busca' placeholder='Min.'/>
            <label>Preço máximo:</label>
            <input type='number' className='busca' placeholder='Max.'/>
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



