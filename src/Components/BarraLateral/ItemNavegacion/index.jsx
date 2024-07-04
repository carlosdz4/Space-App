import styled from "styled-components"

const ItemNavegacion = ({children , iconoActivo , iconoInactivo , activo=false } ) =>{


    const ListItem = styled.li`
        font-size: 24px;
        margin-bottom: 30px;
        line-height: 28px;
        display: flex;
        align-items: center;
        gap: 16px;
        color: ${props => props.$activo ? "#7b78e5" : "#D9D9D9"};
        font-family: ${props => props.$activo ? "" : "GandhiSansBold"};
    `

    
        console.log(activo)
    return(
        

        <ListItem $activo={activo}>
    <img src={activo ? iconoActivo : iconoInactivo}  />
    {children}
    </ListItem>
    
    )

}

export default ItemNavegacion