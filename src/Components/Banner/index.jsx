import styled from "styled-components"
import TituloEstelizado from "../TituloEstelizado"

const Banner = ({imagen}) =>{


    console.log(imagen);
const Figura = styled.figure`
    background-image: ${props => `url(${props.$imagen})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

return (

    <Figura $imagen = {imagen}>
        <TituloEstelizado></TituloEstelizado>
    </Figura>
)

}

export default Banner