import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, Navigate,  } from 'react-router-dom'

function Conseil() {
  const [titre, setTitre] = useState("")
  const [conseil1, setConseil1] = useState("")
  const [conseil2, setConseil2] = useState("")
  const [conseil3, setConseil3] = useState("")
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8081/conseil")
    .then(res =>res.json())
    .then(data =>setData(data))
    .catch(err => console.log(err));
}, )



  const handleSubmit = ()=>{
    // event.preventDefault();
    axios.post("http://localhost:8081/conseil_sante", {titre, conseil1, conseil2, conseil3})
    .then(res => {console.log(res);
      Navigate("/Conseil");
    })
    .catch(err => console.log(err)); 

} 

 const handleDelete = async (id)=>{
  try{
    await axios.delete("http://localhost:8081/conseils/"+id)
    window.location.reload()
  }catch(err){
    console.log(err)
  }
 }
  return (
    <div className='text-center m-5 text-black'>
      <h3 className='uppercase font-bold text-xl my-5 text-white'>Conseils</h3>
      <div className="bg-yellow-100 rounded-xl shadow-xl py-5">
        <form action="" onSubmit={handleSubmit}>
              <div className='flex justify-around'>
                <label htmlFor="" className='font-bold mx-5'>titre :</label>
                <input 
                  type="text" 
                  className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
                  value={titre}
                  onChange={e=>setTitre(e.target.value)}
                  />
            </div>
            <div className='flex justify-around'>
              <label htmlFor="" className='font-bold'>Conseil 1 :</label>
              <input 
                type="text" 
                className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
                value={conseil1}
                onChange={e=>setConseil1(e.target.value)}
                />
            </div> 
           <div className='flex justify-around'>
              <label htmlFor="" className='font-bold'>Conseil 2 :</label>
              <input 
                type="text" 
                className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
                value={conseil2}
                onChange={e=>setConseil2(e.target.value)}
                />
            </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 3 :</label>
            <input 
              type="text" 
              className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
              value={conseil3}
                onChange={e=>setConseil3(e.target.value)}
              />
          </div>
          <button className='border m-5 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'>Envoyer</button>
        </form>
      </div>
      <hr className='h-2 bg-black/30 m-5'/>
      <h3 className="text-center text-red-700 m-5 uppercase">Voir l'Historique des mises a jour</h3>
      {data.map((data, i)=>(
                    <div key={i} className='   bg-slate-500 '>
                        <div className=''>
                           <div className="flex px-10 space-x-5">
                           <p className=' my-1  text-white'>{data.titre}.</p>
                                <p className=' my-1  text-white'>{data.conseil1}.</p>
                                <p className=' my-1  text-white'>{data.conseil2}.</p>
                                <p className=' my-1  text-white'>{data.conseil3}.</p>
                                {/* <p className=' my-1  text-white'>{data.creation}.</p> */}
                                <div className='space-x-5 mr-10 py-1'>
                            <Link to={`/read/${data.id}`} className='bg-green-500 text-white px-1 rounded'>Voir</Link>
                            <Link to={`/modifier/${data.id}`} className='bg-blue-500 text-white px-1 rounded'>MODIFFIER</Link>
                            <button  onClick={()=>handleDelete(data.id)} className='bg-red-700 text-white px-1 rounded'>DELETE</button>
                           </div>
                           </div>
                        <hr className='w-full h-1 text-white'/>
                          
                        </div>
                       
                    </div>
                ))}
    </div>
  )
}

export default Conseil;