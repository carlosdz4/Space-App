import styled from "styled-components"
import Titulo from "../Titulo/Titulo"
import foto from "./fotos-populares.json"


const ColumnaFoto = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
`

const Imagen = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () =>{

    return(
        <section>
        <Titulo $align="center">Populares</Titulo>
        <ColumnaFoto>
        
        {foto.map(e =>{
         return   <Imagen src={e.path} key={e.id} alt={e.alt}></Imagen>
        })}
        
        </ColumnaFoto>

        <Boton>Ver Mas</Boton>
        </section>
    )
}

export default Populares