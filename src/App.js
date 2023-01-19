import { useState } from "react";
import Banner from "./components/Banner";
import FullForm from "./components/FullForm";
import Clado from "./components/Clado";

import "./App.css"



function App() {

  const [clados, setClados] = useState([
    {
      cladoName:'Herrerasauridae',
      cladoColor:'#FD9651'
    }
    ,
    {
      cladoName:'Sauropodomorpha',
      cladoColor:'#FDA051'
    }
    ,
    {
      cladoName:'ornithischia',
      cladoColor:'#FDAA51'
    }
    ,
    {
      cladoName:'Theropoda',
      cladoColor:'#FDB451'
    }
  ])

  const [dinossauros, setDinossauro] = useState([])

  const addDinoSee = (dinossauro) => {
    setDinossauro([...dinossauros, dinossauro])
  }

  function deleteDino (){
    console.log("teste")
  }

  function changeColor (bgColor, cName) {
      setClados(clados.map(clado => {
        if(clado.cladoName === cName) {
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
          <FullForm addDino={dinossauro => addDinoSee(dinossauro)} clados={clados.map(clado => clado.cladoName)}/>
        </section>

        <section>
          {clados.map(clado => <Clado 
            key={clado.cladoName}
            changeColor={changeColor} 
            nome={clado.cladoName} 
            cladoColor={clado.cladoColor} 
            dinossauros={dinossauros.filter(dinossauro => dinossauro.clado === clado.cladoName)}
            deleteDino = {deleteDino}  
            />
          )}
        </section>
        
      </main>
      
    </div>
  );
}

export default App;
