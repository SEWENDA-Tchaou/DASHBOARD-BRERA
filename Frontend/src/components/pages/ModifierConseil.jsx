import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, Navigate,  useParams} from 'react-router-dom'

function ModifierConseil() {
  const [titre, setTitre] = useState("")
  const [conseil1, setConseil1] = useState("")
  const [conseil2, setConseil2] = useState("")
  const [conseil3, setConseil3] = useState("")
  const {id} = useParams()

  console.log(id)
  const [data, setData] = useState([])
  console.log(data)
  
  useEffect(()=>{
    fetch("http://localhost:8081/conseil")
    .then(res =>res.json())
    .then(data =>setData(data))
    .catch(err => console.log(err));
}, )

const getInformationById = (id) => {
  return data.find(item => item.id === parseInt(id));
};

const information = getInformationById(id);

useEffect(() => {
  if (information) {
      setTitre(information.titre);
      setConseil1(information.conseil1);
      setConseil2(information.conseil2);
      setConseil3(information.conseil3);
  }
}, [information]);

console.log(information)

  const handleSubmit = ()=>{
    // event.preventDefault();
    axios.fetch("http://localhost:8081/modifier/"+id, {id, titre, conseil1, conseil2, conseil3})
    .then(res => {console.log(res);
      Navigate("/");
    })
    .catch(err => console.log(err)); 

} 
  return (
    <div className='text-center m-5 text-black'>
      <h3 className='uppercase font-bold text-xl my-5 text-white'>Modifier</h3>
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
          <button 
            className='border m-5 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'>
              Modifier
          </button>
        </form>
      </div>
      <hr className='h-2 bg-black/30 m-5'/>
      
    </div>
  )
}

export default ModifierConseil;