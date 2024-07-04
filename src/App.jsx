

import styled from "styled-components"
import GloblasStyles from "./Components/GlobalStyles/index.jsx"
import Cabecera from "./Components/Cabecera/index.jsx"
import BarraLateral from "./Components/BarraLateral/index.jsx"
import Banner from "./Components/Banner/index.jsx"
import Galeria from "./Components/Galeria/Galeria.jsx"
import fotos from "./fotos.json"
import { useState , useEffect } from "react"
import ModalZoom from "./Components/ModalZoom/index.jsx"
import Footer from "./Components/Footer/index.jsx"

const FondosGrande = styled.div`

background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`

const Appcontenedor = styled.div`
  width: 96%;
  max-width: 100%;
  margin: 0 auto;
`

const MainContenedor = styled.main`
  display: flex;
  gap: 24px;
`

const GaleriaDisplay = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
 
  const [fotosGaleria , setFotoGaleria] = useState(fotos);
  const [filtro , setFiltro] = useState('');
  const [tags , setTags] = useState(0);
  const [fotoSelecionada , setfotoSelecionada] = useState(null);

useEffect( () => {

  const fotosFiltrada = fotos.filter(fo => {
      const filtroTag = !tags || fo.tagId === tags
      const filtroTitulo = !filtro || fo.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroTag && filtroTitulo
  })
    setFotoGaleria(fotosFiltrada);
} , [filtro , tags])


  const AlternarFavorito = (foto) =>{

    if (foto.id === fotoSelecionada.id) {
      setfotoSelecionada({
        ...fotoSelecionada,
        favorito: !fotoSelecionada.favorito
      })
    }
    

    console.log(foto)
    setFotoGaleria(fotosGaleria.map(e =>{
      return{
        ...e,
        favorito: e.id === foto.id ? !foto.favorito : e.favorito
      }
    }));
  }


  return (
    <>
    <FondosGrande>
      <GloblasStyles />
      
      <Appcontenedor>
      <Cabecera filtro={filtro} setFiltro={setFiltro} />
        <MainContenedor>
      <BarraLateral />
     
      < GaleriaDisplay >
      <Banner imagen={"../public/img/Foto-destaque.png"} />
      <Galeria tags={tags} setTags={setTags} foto = {fotosGaleria} alSelecionarFoto ={foto => setfotoSelecionada(foto)} AlternarFavorito={AlternarFavorito}/>
      </GaleriaDisplay>
      
      </MainContenedor>
      </Appcontenedor>

    <ModalZoom foto={fotoSelecionada } AlCerrar={() => setfotoSelecionada(null) } AlternarFavorito={AlternarFavorito} />

    <Footer />
    </FondosGrande>
    </>
  )
}

export default App
