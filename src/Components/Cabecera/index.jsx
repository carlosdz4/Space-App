import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    img{
        width: 212px;
    }
`

const Cabecera = ({filtro , setFiltro}) =>{

return <HeaderStyles>

   
    <img src="/img/Logo.png" alt="Logo de SpaceApp" />
    <CampoTexto filtro={filtro} setFiltro={setFiltro}/>
</HeaderStyles>


}

export default Cabecera