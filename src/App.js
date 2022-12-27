import { useState } from "react";
import Banner from "./components/Banner";
import FullForm from "./components/FullForm";
import Clado from "./components/Clado";

import "./App.css"



function App() {

  const clados = [
    {
      cladoName:'Herrerasauridae',
      primaryColor:'#6AFCB2',
      secundaryColor:'#FD9651'
    }
    ,
    {
      cladoName:'Sauropodomorpha',
      primaryColor:'#6AFCC5',
      secundaryColor:'#FDA051'
    }
    ,
    {
      cladoName:'ornithischia',
      primaryColor:'#6AFCD3',
      secundaryColor:'#FDAA51'
    }
    ,
    {
      cladoName:'Theropoda',
      primaryColor:'#6AFCE6',
      secundaryColor:'#FDB451'
    }
  ]

  const [dinossauros, setDinossauro] = useState([])

  const addDinoSee = (dinossauro) => {
    setDinossauro([...dinossauros, dinossauro])
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
            nome={clado.cladoName} 
            primaryColor={clado.primaryColor} 
            secundaryColor={clado.secundaryColor}
            dinossauros={dinossauros.filter(dinossauro => dinossauro.clado === clado.cladoName)}
            />)}
        </section>
        
      </main>
      
    </div>
  );
}

export default App;
