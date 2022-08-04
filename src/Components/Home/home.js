import React, { useState } from 'react'
import { Side } from './homeStyle'
import { Container } from './homeStyle'
import { Itens } from './Itens'


export const Home = () => {

    const [minValue, setMinValue] = useState('')
    const [maxValue, setMaxValue] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [ordenar, setOrdenar] = useState('')
    const [ordenarSortido, setOrdenarSortido] = useState('')   
    const [cartShop, setCartShop] = useState(JSON.parse(localStorage.getItem('Cart'))||[])
    const delectProduct = (prod) => {
      const newCart = cartShop.filter(elem => elem !== prod)
      localStorage.setItem('Cart', JSON.stringify(newCart))
      setCartShop(newCart)
    }

  return (
    <Container>
        <Side>
            <label>Pesquisar</label>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='busca'  placeholder='Pesquisar'/>
            <label>Preço minimo:</label>
            <input value={minValue} onChange={(e) => setMinValue(e.target.value)} type='number'className='busca' placeholder='Min.'/>
            <label>Preço máximo:</label>
            <input value={maxValue} onChange={(e) => setMaxValue(e.target.value)} type='number' className='busca' placeholder='Max.'/>
            <span>Ordernar:</span>
            <select
                    value={ordenar}
                    onChange={(ev) => { setOrdenar(ev.target.value) }}
                >
                    <option value={"cresc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                </select>

                <select
                value={ordenarSortido}
                onChange={(ev) => { setOrdenarSortido(ev.target.value) }}
                >
                    <option value={"nomeDoProduto"}>Nome</option>
                    <option value={"valor"}>Preço</option>
                </select>
        </Side>
        <Itens setCartShop={setCartShop} cartShop={cartShop} ordenar={ordenar} ordenarSortido={ordenarSortido} minValue={minValue} maxValue={maxValue} searchValue={searchValue}/>
        <Side>
            <h1>Carrinho</h1>
            {cartShop.map(prod => <div onClick={() => delectProduct(prod)} key={prod.id}>{prod.product}, {prod.quantidade}</div>)}
            <p>Valor total:{cartShop.reduce((acc,act) => acc+(act.price * act.quantidade),0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </Side>
    </Container>
  )
}

export default Home

// finalizado.

