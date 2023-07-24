import React from 'react'

function Pageacueille() {
  return (
    <div className='text-center m-5 text-black h-screen'>
      <h3 className='uppercase font-bold text-xl my-5 text-white'>Page Accueille</h3>
      <div className="bg-yellow-100 rounded-xl shadow-xl py-5">
        <h3 className=' mb-5 text-xl'>Ajouter de la PUB</h3>
        <div className="flex p-5 justify-around">
          <input type="file" />
          <div className="flex space-x-2 text-md">
            <label htmlFor="">Activer l'image</label>
            <button className='border border-blue-500'>ac</button>
          </div>
        </div>
        <hr  className='mx-5 h-0.5 bg-black/30'/>
        <div className='flex justify-around p-5 '>
          <label htmlFor="">Message :</label>
          <textarea className='text-black px-5 bg-white/30 border border-black w-[500px]' placeholder='Entrer le message de la pub ici' name="" id="" cols="1" rows="1"></textarea>
        </div>
        <button className='border m-5 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'>Apercu</button>
      </div>
      <hr className='h-2 bg-black/30 m-5'/>
      <h3 className="text-center text-red-700 m-5 uppercase">Voir l'Historique des mises a jour</h3>
    </div>
  )
}

export default Pageacueille;