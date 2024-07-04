import styled from "styled-components"


const TituloEstelizado = () =>{
    const Titulo = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
  `;


    return (
        <Titulo>
            La galería más completa del espacio
        </Titulo>
    )

}

export default TituloEstelizado