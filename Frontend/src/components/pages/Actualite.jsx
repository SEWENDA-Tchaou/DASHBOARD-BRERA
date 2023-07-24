import axios from 'axios';
import {React, useState }from 'react'


function Actualite() {

  // const [image, setImage] = useState("");
  const [titre, setTitre] = useState("");
  const [theme, setTheme] = useState("");


  function handleSubmit (event){
      event.preventDefault();
      axios.post("http://localhost:8081/ ", {titre, theme, })
      .then(res => {
          console.log(res);
      }).catch(err => console.log(err)); 

      
      // console.log(allInputValue);
  } 
  return (
    <div className='text-center m-5 text-black h-screen'>
    <h3 className='uppercase font-bold text-xl my-5 text-white'>Actualites</h3>
    <div className="bg-yellow-100 rounded-xl shadow-xl py-5">
      <h3 className=' mb-5 text-xl'>Publier votre actualite ici</h3>
      <form  onSubmit={handleSubmit}>
        {/* <input type="file" 
        className='mb-5 ml-[120px]'
        onChange={e=>setImage(e.target.value)}
        /> */}
        <div className="m-3 flex justify-around">
          <label htmlFor="">Titre de la publication :</label>
          <input 
          type="text" 
          className='w-[500px] h-10 m-1 rounded-lg bg-white/30 border border-black'
          onChange={e=>setTitre(e.target.value)}
           />
        </div>
        <div className="m-3 flex justify-around">
          <label htmlFor="" className='ml-[100px]'>Theme :</label>
          <input 
          type="text"  
          className='w-[500px] h-10 m-1 rounded-lg bg-white/30 border border-black'
          onChange={e=>setTheme(e.target.value)}
          />
        </div>
        <button className='border m-5 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'>Envoyer</button>

      </form>
     
      
    </div>
    <hr className='h-2 bg-black/30 m-5'/>
      <h3 className="text-center text-red-700 m-5 uppercase">Voir l'Historique des mises a jour</h3>
  </div>
  )
}

export default Actualite;