import styled from "styled-components"
import tags from "./tags.json"


const TagContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
const Tagbtn = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
    `
const Div = styled.div`
display: flex;
gap: 24px;
justify-content: end;
`
const Tag = ({setTags}) => {

  
    return (
        <>
            <TagContainer>
                <TagTitulo>Buscando por tags:</TagTitulo>

                <Div>
                {tags.map((e) => {
                    return <Tagbtn key={e.id} onClick={() =>setTags(e.tag)}>{e.titulo} </Tagbtn>
                })}
                </Div>
            </TagContainer>
        </>

    )
}

export default Tag