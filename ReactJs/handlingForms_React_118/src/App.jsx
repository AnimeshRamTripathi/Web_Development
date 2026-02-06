import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const [count, setCount] = useState(0)

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting },
    } = useForm();
    
      const delay=(d)=>{
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve()
          },d*1000);
        })
      }

    const onSubmit= async(data) =>{
     // await delay(4) //simulating network delay
     let r=await fetch("http://localhost:3000/",{method: "POST",body: JSON.stringify(data)})
     let res=await r.text();
     console.log(data,res);

    }
  return (
    <>
    {isSubmitting&&<div>Loading...</div>}
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username'
        {...register("username",{required:true, minLength:{value:3, message:"Min length is 3"}, maxLength:{value:8, message:"Max length is 8"}})} type="text" />
        {errors.username&&<div className='red'>{errors.username.message}</div>}
        <br />
        <input placeholder='password' {...register("password")} type="password"  />
        <br />
       
        <input disabled={isSubmitting} type="submit" value="Submit" />
      </form>
    </div>
      </>
  )
}

export default App
