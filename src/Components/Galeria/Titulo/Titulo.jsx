import styled from "styled-components"


const Titulo = styled.h2`
    
font-size: 32px;
font-weight: 400;
line-height: 42.69px;
text-align: ${props => props.$aling ? props.$align : "left"};
color: rgba(123, 120, 229, 1);

`



export default Titulo