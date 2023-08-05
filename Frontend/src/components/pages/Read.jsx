import {useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Read() {
  const [voir, setVoir] = useState([])
  const {id} = useParams()
    useEffect(() => {
      axios.post('/http://localhost:8081/read/' +id)
      .then(res =>{
        console.log(res)
        setVoir(res.data[0]);
      })
      .catch(err =>console.log(err))
    })
  return (
    <div>
      <p>Titre:{voir.titre}</p>
      <p>Conseil1:{voir.conseil1}</p>
      <p>Conseil2:{voir.conseil2}</p>
      <p>Conseil3:{voir.conseil3}</p>
    </div>
  )
}

export default Read;