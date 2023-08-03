import "./App.css";
import Characters from "./components/Characters";



function App() {

  
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <Characters />
        <div className="footer">
                &copy;&nbsp;{new Date().getFullYear()}&nbsp;Thu Rein Soe
            </div>
      </div>
 
    </div>
  )
}

export default App;