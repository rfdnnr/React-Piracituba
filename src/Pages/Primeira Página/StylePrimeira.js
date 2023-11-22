import styled from "styled-components";

const DivSB = styled.div`
    margin: auto;
    width: fit-content;
    font-family: 'Abel';
    margin-left: 9px;
    font-size: 20px;
`


const DivBotoes = styled.div`
    width: fit-content;
    margin: auto;
`
const Botao = styled.button`
    background-color: #214E78;
    color: white;
    border-radius: 6px;
    border: 3px;
    padding: 10px;
    font-size: 16px;
    margin: 5px;
`

const BotaoSN = styled.button`
    background-color: #214E78;
    color: white;
    border-radius: 6px;
    border: 3px;
    padding: 10px;
    font-size: 16px;
    margin: 5px;
    display: block;
`

const DivElementosFiltro = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Abel';
    font-size: 18px;
`
const Selects = styled.select`
    font-family: 'Abel';
    font-size: 16px;
`



const TextoFiltro = styled.div`
    font-size: 26px;
    margin-left: 10px;
    margin-top: 45px;
    color: #00000;
    font-family: 'Abel', sans-serif;
`

const DivFiltro = styled.div`
    background-color: #E09934;
    margin-bottom: 20px;
`

const TextoCronos = styled.div`
    font-size: 48px;
    margin-left: 10px;
    color: #E09934;
    font-family: 'Abel', sans-serif;
`

const TextoHistorico = styled.div`
    font-size: 24px;
    color: white;
    display: inline-flex;
`

const Logoheader = styled.img`
    margin-left: 10px;
`

const Header = styled.div`
    background-color: #000000f5;
    height: 85px;
`

export {Header}
export {Logoheader}
export {TextoCronos}
export{TextoHistorico}
export{DivFiltro}
export{TextoFiltro}
export{DivElementosFiltro}
export{Selects}
export{DivBotoes}
export{Botao}
export{BotaoSN}
export{DivSB}