import Contador from "./components/Contador"
import Navbar from "./components/Navbar"


const onAdd = () =>{
  console.log("ejecutando...")
}

function App() {
 
  return (
    <div className="App">
   
   <Navbar />
   
    <main>
      <Contador onAdd={onAdd} init={1} stock={10}  />-
    </main>

    </div>
  )
}

export default App
