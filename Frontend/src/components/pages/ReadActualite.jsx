import {useEffect, useState } from 'react'
// import axios from 'axios'
import { useParams } from 'react-router-dom'

function Read() {
  // const [titre, setTitre] = useState("")
  // const [conseil1, setConseil1] = useState("")
  // const [conseil2, setConseil2] = useState("")
  // const [conseil3, setConseil3] = useState("")
  const [data, setData] = useState([])
  const id = useParams();

  useEffect(()=>{
    fetch("http://localhost:8081/actualite/")
    .then(res =>res.json())
    .then(data =>setData(data))
    .catch(err => console.log(err));
}, )
  return (
    <div>
      <h3 className='uppercase text-center font-bold text-xl my-5 text-white'>Voir Actualite creee</h3>

      <div className="overflow-scroll">
      {data.map((data, i)=>(
                    <div key={i} className=' bg-slate-500 mx-5 my-1 rounded'>
                        <div className=''>
                           <div className="flex flex-col justify-center items-justify px-10 space-x-5">
                              <p className=' my-1  text-white font-bold'>{data.titre}.</p>
                              <p className=' my-1  text-white'>{data.theme}.</p> 
                              <p className=' my-1  text-white'>{data.themeSuite}.</p>
                              {/* <p className=' my-1  text-white'>{data.conseil3}.</p> */}
                                {/* <p className=' my-1  text-white'>{data.creation}.</p> */}
                            <div className='space-x-5 mr-10 py-1'>
                            {/* <Link to={`/read/${data.id}`} className='bg-green-500 text-white px-1 rounded'>Voir</Link>
                            <Link to={`/modifier/${data.id}`} className='bg-blue-500 text-white px-1 rounded'>MODIFFIER</Link>
                            <button  onClick={()=>handleDelete(data.id)} className='bg-red-700 text-white px-1 rounded'>DELETE</button> */}
                           </div>
                           </div>
                        <hr className='w-full h-1 text-white'/>
                          
                        </div>
                       
                    </div>
                ))}
      </div>
    </div>
  )
}

export default Read;