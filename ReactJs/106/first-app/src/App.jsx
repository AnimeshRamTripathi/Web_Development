import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Cards from "./Cards.jsx"
function App() {
  

  return (
   <>
   <Navbar/>
  <div className="cards">
    <Cards title="Card 1" description="Card1 description"/> 
    <Cards title="Card 2" description="Card2 description"/> 
    <Cards title="Card 3" description="Card3 description"/> 
    <Cards title="Card 4" description="Card4 description"/> 
    <Cards title="Card 5" description="Card5 description"/> 
    <Cards title="Card 6" description="Card6 description"/> 
    <Cards title="Card 7" description="Card7 description"/> 
    <Cards title="Card 8" description="Card8 description"/> 
  </div>
   <Footer/>
   </>
     
  )
}

export default App
