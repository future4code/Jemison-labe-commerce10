import React from "react";
import { Mercado, IMG, DescriptionProduct, Price, Div } from "./ItensStyled";
import { products } from "./products";



export const Itens = (props) => {
    const addQtd = (prod) =>{
        if(props.cartShop.includes(prod)){
            prod.quantidade +=1
            props.setCartShop([...props.cartShop])
            localStorage.setItem('Cart',JSON.stringify([...props.cartShop])) 
        }else {
            localStorage.setItem('Cart',JSON.stringify([...props.cartShop,prod])) 
            props.setCartShop([...props.cartShop,prod])
        }
        
    }
    return (
<Div>
    {products.filter(prod=>prod.product.toLowerCase().includes(props.searchValue.toLowerCase()))
    .filter(prod => prod.price > Number(props.minValue)|| props.minValue ==='')
    .filter(prod => prod.price < Number(props.maxValue)|| props.maxValue ==='')
    .sort((atualProduto, proximoProduto) => {
        switch (props.ordenarSortido) {
          case "valor":
            return atualProduto.price - proximoProduto.price
          case "nomeDoProduto":
            return atualProduto.product.localeCompare(proximoProduto.product)
          default:
        }
      })
      .sort(() => {
        if (props.ordenar === "cresc") {
          return 0
        } else {
          return -1
        }
      })
    .map(prod =><Mercado key={prod.id}>
        <IMG alt={prod.product} src={prod.img}/>
        <DescriptionProduct>{prod.product}</DescriptionProduct>
        <Price>{prod.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Price>
        <button onClick={()=> addQtd (prod) } className="Button" type="submit">Adicionar ao carrinho</button>
    </Mercado>
    )}  
</Div>
  )
}
