import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Pageacueille() {
  const [pub, setPub] = useState("")
  const [data, setData] = useState([])
  const Navigate = useNavigate("")
  useEffect(()=>{
      fetch("http://localhost:8081/pub")
      .then(res =>res.json())
      .then(data =>setData(data))
      .catch(err => console.log(err));
  }, )

  const handleSubmit = ()=>{
    // event.preventDefault();
    axios.post("http://localhost:8081/pub_actu", {pub, })
    .then(res => {console.log(res);
      Navigate("/Pageacceuille");
    })
    .catch(err => console.log(err)); 

} 
  return (
    <div className='text-center m-5 text-black h-screen'>
      <h3 className='uppercase font-bold text-xl my-5 text-white'>Page Accueille</h3>
      <div className="bg-yellow-100 rounded-xl shadow-xl py-5">
        <h3 className=' mb-5 text-xl'>Ajouter de la PUB a la Page d'acceuille</h3>
        <div className='flex justify-around p-5 '>
          <form action="" onSubmit={handleSubmit} >
          {/* <label htmlFor="">PUB :</label> <br /> */}
          <textarea 
            className='text-black px-5 bg-white/30 border border-black w-[500px]' 
            placeholder='Entrer le message de la pub ici' 
            name="" 
            id="" 
            cols="1" 
            rows="1"
            value={pub}
            onChange={e=>setPub(e.target.value)}           
            >
            </textarea> <br />
            <button className='border m-5 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'>Envoyer</button>
          </form>
          
        </div>
        
      </div>
      <hr className='h-2 bg-black/30 m-5'/>
      <h3 
        className="text-center text-red-700 m-5 uppercase">
          Voir l'Historique des mises a jour
      </h3>
      {data.map((data, i)=>(
                    <div key={i} className='   bg-slate-500 '>
                        <div className=''>
                           <div className="flex px-10 space-x-5">
                                <p className=' my-1  text-white'>{data.pub}.</p>
                                <div className='space-x-5 mr-10 py-1'>
                            <button className='bg-blue-500 text-white px-1 rounded'>MODIFFIER</button>
                            <a href="" className='bg-red-700 text-white px-1 rounded'>DELETE</a>
                           </div>
                           </div>
                        <hr className='w-full h-1 text-white'/>
                          
                        </div>
                       
                    </div>
                ))}

    </div>
  )
}

export default Pageacueille;