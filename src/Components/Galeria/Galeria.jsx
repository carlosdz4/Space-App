import styled from "styled-components"
import Populares from "./Populares"
import Tag from "./Tag/Tag"
import Titulo from "./Titulo/Titulo"
import Imagen from "./Imagen"




const GaleriaContenedor = styled.div`
    
display: flex;

`
const SeccionFluida = styled.section`
    flex-grow: 1;
`

const ImagenContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({foto = [] , alSelecionarFoto, AlternarFavorito , setTags }) =>{

    
    return(
        <>
        <Tag setTags={setTags}/>
        <GaleriaContenedor>
            <SeccionFluida>
            <Titulo>Navegue por la galería</Titulo>

            <ImagenContainer>
            {
                foto.map(e => {
                    
                  return  <Imagen AlternarFavorito={AlternarFavorito} key={e.id} foto ={e} AlsolicitarZoom ={alSelecionarFoto }></Imagen>
                })
            }
            </ImagenContainer>


            </SeccionFluida>
            <Populares />
           
        </GaleriaContenedor>
        

        </>
    ) 

}

export default Galeria