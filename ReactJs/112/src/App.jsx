import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // const [name, setname] = useState("animesh")
  const [form, setForm] = useState({email:"",
    phone:""
  })

  const handleClick=()=>{
    alert("Hey I am clicked")

  }
   const handleMouseOver=()=>{
    alert("Hey I am mouse over")

  }
  const handlechange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form) 
  }
  return (
    <>
     <div className="button">
      <button onClick={handleClick} >Click Me</button>
     </div>
     {/* <div className="red" onMouseOver={handleMouseOver}>I am a red</div>  */}
      <input type="text" name='email' value={form.email} onChange={handlechange} />
      <input type="text" name='phone' value={form.phone} onChange={handlechange} />

    </>
  )
}

export default App
