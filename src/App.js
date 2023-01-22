import { useState } from "react";
import Banner from "./components/Banner";
import FullForm from "./components/FullForm";
import Clado from "./components/Clado";
import Footer from "./components/Footer"
import { v4 as uuidv4} from 'uuid';

import "./App.css"



function App() {

  const [clados, setClados] = useState([
    {
      id: uuidv4(),
      cladoName:'Herrerasauridae',
      cladoColor:'#FD9651'
    }
    ,
    {
      id: uuidv4(),
      cladoName:'Sauropodomorpha',
      cladoColor:'#FDA051'
    }
    ,
    {
      id: uuidv4(),
      cladoName:'ornithischia',
      cladoColor:'#FDAA51'
    }
    ,
    {
      id: uuidv4(),
      cladoName:'Theropoda',
      cladoColor:'#FDB451'
    }
  ])



  const [dinossauros, setDinossauro] = useState([])

  const addDinoSee = (dinossauro) => {
    setDinossauro([...dinossauros, dinossauro])
  }

  function deleteDino (id){
    setDinossauro(dinossauros.filter(dinossauro => dinossauro.id !== id))
  }

  function changeColor (bgColor, id) {
      setClados(clados.map(clado => {
        if(clado.id === id) {
          clado.cladoColor = bgColor
        }
        return clado;
      }))
  }

  return (
    <div className="App">
      
      <header>
        <Banner />
      </header>
      
      <main>

        <section className="form_area">
          <FullForm 
            addDino={dinossauro => addDinoSee(dinossauro)} 
            clados={clados.map(clado => clado.cladoName)}
          />
        </section>

        <section>
          {clados.map(clado => <Clado
            id={clado.id}
            key={clado.id}
            changeColor={changeColor} 
            nome={clado.cladoName} 
            cladoColor={clado.cladoColor} 
            dinossauros={dinossauros.filter(dinossauro => dinossauro.clado === clado.cladoName)}
            deleteDino = {deleteDino}  
            />
          )}
        </section>
        
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;
