import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"




const ListaStyle = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    
`




const BarraLateral = () =>{

    return(
        <aside>
            <nav>
                <ListaStyle>
                    <ItemNavegacion iconoActivo="../public/iconos/home-activo.png" iconoInactivo="../public/iconos/home-inactivo.png"   activo >
                        Inicio
                    </ItemNavegacion>
                    
                    <ItemNavegacion iconoActivo="../public/iconos/mas-vistas-activo.png" iconoInactivo="../public/iconos/mas-vistas-inactivo.png"   activo={false}  >
                        Mas Visitado
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo="../public/iconos/me-gusta-activo.png" iconoInactivo="../public/iconos/me-gusta-inactivo.png"   activo={false}  >
                    Más Me Gusta
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo="../public/iconos/nuevas-activo.png" iconoInactivo="../public/iconos/nuevas-inactivo.png"   activo={false}  >
                    Nuevas
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo="../public/iconos/sorprendeme-activo.png" iconoInactivo="../public/iconos/sorprendeme-inactivo.png"   activo={false}  >
                    Sorpréndame
                    </ItemNavegacion>

                    </ListaStyle>
            </nav>
        </aside>
    )
}

export default BarraLateral