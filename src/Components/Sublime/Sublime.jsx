import { useEffect, useState } from 'react'
import './Sublime.scss'

const Sublime = () =>{
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
     

    return(
       <div>
           <h1>Hello</h1>

           <ul>
               {
                   data && data.map(e =>(
                       <li>{e.id}</li>
                   ))
               }
           </ul>
       </div>
    )
}

export default Sublime