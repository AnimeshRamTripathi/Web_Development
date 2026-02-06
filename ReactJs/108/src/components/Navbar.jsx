import React,{useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
        alert("HEY! I WIll run on every render")
      
       
      },)
    
    useEffect(() => {
        alert("HEY! I will run on first render")
      
       
      }, [])
    useEffect(() => {
        alert("Colour was changed")
      
       
      }, [color])
      useEffect(() => {
        alert("Hey welcome to my page.THis is the first render of app.jsx")
    
        return ()=>
        {
          alert("COmponent was unmounted")
        }
       
      }, [])
  return (
    <div>
      HEY I am a navbar hehe {color}
    </div>
  )
}

export default Navbar
