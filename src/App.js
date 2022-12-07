import Banner from "./components/Banner";
import FullForm from "./components/FullForm";
import "./App.css"



function App() {
  return (
    <div className="App">
      
      <header>
        <Banner />
      </header>
      
      <main>

        <section className="form_area">
          <FullForm />
          
        </section>
        
      </main>
      
    </div>
  );
}

export default App;
