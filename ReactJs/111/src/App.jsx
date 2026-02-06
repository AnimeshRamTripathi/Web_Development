import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetcher from './components/datafetcher'

function App() {
  const [count, setCount] = useState(0)
  const [data, setdata] = useState([])



const Card = ({props}) => {
  return (<>
    <div style={{ border: '2px solid red', margin: '10px', padding: '10px',width:"33vh"}}>
      <div className="userid">userId:{props.userId}</div>
      <div className="id">Id:{props.id}</div>
      <div className="title">title:{props.title}</div>
      <div className="body">body:{props.body}</div>

    </div>
    </>
  )
}





  return (
    <>
    <h1>API TESTER</h1>
    <DataFetcher onDataFetched={setdata} />
      
    <div style={{display:"flex",width:'fit-content',
    flexWrap:'wrap'}}>
      {data.map((item)=>(
        <Card key={item.id} props={item}/>
    
      ))}
      </div>
    </>
  )
}

export default App
