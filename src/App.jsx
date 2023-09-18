import './App.css'
import Header from "./components/Header"
import Gallery from "./components/Gallery"
import Card from "./components/Card"
import Data from "./Data"

function App() {

  const cards = Data.map((item) => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Gallery />
      <div className="card-container">
      {cards}
      </div>
    </div>
  )
}

export default App
