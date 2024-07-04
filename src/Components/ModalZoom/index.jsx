import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import BotonIcono from "../BotonIcono/BotonIcono"


const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`

const Dialogo = styled.dialog`
    position: absolute;
    background-color: rgba(0,0,0,0.0);
    top: 294px;
    height: 740px;
    width: 1156px;
    padding: 0;
    border: none;
    display: flex;
    justify-content: center;

    form{
        button{
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({foto  ,AlCerrar , AlternarFavorito}) => {


    return (
        <>
        
            {foto && <>
                <Overlay />
            <Dialogo open={!!foto} onClose={AlCerrar}>
                <Imagen foto={foto} expandida={true} AlternarFavorito={AlternarFavorito}/>
                
                <form method="dialog">
                    <BotonIcono formMethod>
                    <img src="../public/iconos/cerrar.png" alt="Ícono de cerrar" />
                    </BotonIcono>
                </form>


            </Dialogo> </>  }

            

        </>
    )
}

export default ModalZoom