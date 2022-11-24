import Travel from "../components/Travel"
import Navbar from "../components/Navbar"
import data from "./data"



function App() {

    const travels = data.map(item => {
        return (
            <Travel 
                key={item.id}
                item={item}
            />
        )
    })
  return (
    <div className="container">
        <Navbar />
        <br />
        {travels}
    </div>
  )
}

export default App
