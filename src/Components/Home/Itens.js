import React from "react";
import styled from "styled-components";
import brinquedo from "./Assets/brinquedo tematico.png"
import meteorito from "./Assets/meteorito-lunar.jpeg"
import nave from "./Assets/nave.png"
import roupas from "./Assets/roupa.jpg"
import viajem from "./Assets/viajem.jpeg"
import satelite from "./Assets/satelite.jpg"



const Mercado = styled.div `
    display: flex;
    margin: 10px;
    width: 200px;
    text-align: justify;
    height: 310px;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
   
 
`

const IMG = styled.img `
    margin-left: 2px;
    width: 200px;
    object-fit: cover;
    height: 200px;
    
`
const DescriptionProduct = styled.p `
    font-size: 12px;
    text-align: center;
    margin: 10px 15px;
`

const Price = styled.h4 `
    text-align: center;
    font-size: 15px;
`





export const Itens = () => {
  return (
    <>
    <Mercado>
        <IMG alt="nave" src={brinquedo}/>
        <DescriptionProduct>Brinquedo Planetas</DescriptionProduct>
        <Price>R$50,00</Price>
        <button className="Button" type="submit">Adicionar ao carrinho</button>
    </Mercado>

    <Mercado>
        <IMG className="Meteorito" alt="nave" src={meteorito}/>
        <DescriptionProduct>Meteorito</DescriptionProduct>
        <Price>R$5000,00</Price>
        <button className="Button" type="submit">Adicionar ao carrinho</button>
    </Mercado>

    <Mercado>
        <IMG alt="nave" src={nave}/>
        <DescriptionProduct>Nave</DescriptionProduct>
        <Price>R$50,00</Price>
        <button className="Button" type="submit">Adicionar ao carrinho</button>
    </Mercado>

    <Mercado>
        <IMG className="Roupa" alt="nave" src={roupas}/>
        <DescriptionProduct>Roupa Espacial</DescriptionProduct>
        <Price>R$50,00</Price>
        <button className="Button" type="submit">Adicionar ao carrinho</button>
    </Mercado>

    <Mercado>
        <IMG alt="nave" src={viajem}/>
        <DescriptionProduct>Viajem Monstrona</DescriptionProduct>
        <Price>R$50,00</Price>
        <button className="Button" type="submit">Adicionar ao carrinho</button>
    </Mercado>

    <Mercado>
        <IMG alt="nave" src={satelite}/>
        <DescriptionProduct>Satelite</DescriptionProduct>
        <Price>R$50,00</Price>
        <button className="Button" type="submit">Adicionar ao carrinho</button>
    </Mercado>
</>
  )
}
