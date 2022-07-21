import React from "react";
import styled from "styled-components";
import brinquedo from "./Assets/brinquedo tematico.png"
import meteorito from "./Assets/meteorito-lunar.jpeg"
import nave from "./Assets/nave.png"
import roupas from "./Assets/roupa.jpg"
import viajem from "./Assets/viajem.jpeg"
import satelite from "./Assets/satelite.jpg"
import { Mercado, IMG, DescriptionProduct, Price } from "./ItensStyled";




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
