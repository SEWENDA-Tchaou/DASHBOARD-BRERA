import  {React, useState, useEffect } from 'react'
import axios from 'axios';

function Newsletter() {
    // affichage des donnes de la base de donnee
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8081/newsletter")
        .then(res =>res.json())
        .then(data =>setData(data))
        .catch(err => console.log(err));
    }, [])
    
  return (
    <div className='text-center p-2 shadow-md shadow-white '>
        <h1 className='uppercase text-2xl font-extrabold  text-white'>newsletter</h1>
        <div className='justify-center items-center'>
                <strong className='text-center text-2xl font-semibold text-white'>LES ABONNE(E)S DE BRERA / DPH</strong>
            <div>
                {data.map((data, i)=>(
                    <div key={i} className='   bg-slate-500 '>
                        <div className='flex justify-between'>
                           <div className="flex px-10 space-x-5">
                                <p className=' my-1  text-white'>{data.id}.</p>
                                <p className=' my-1 text-white' id='copieMail'>{data.email}</p>
                           </div>
                           <div className='space-x-5 mr-10 py-1'>
                            <button className='bg-blue-500 text-white px-1 rounded'>COPIER L'EMAIL</button>
                            <a href="" className='bg-red-700 text-white px-1 rounded' onClick={ e => handleDelete(data.ID)}>DELETE</a>
                           </div>
                        </div>
                        <hr className='w-full h-1 text-white'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Newsletter;