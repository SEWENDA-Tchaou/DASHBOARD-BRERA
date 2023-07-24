import React from 'react'

function Conseil() {
  return (
    <div className='text-center m-5 text-black'>
      <h3 className='uppercase font-bold text-xl my-5 text-white'>Conseils</h3>
      <div className="bg-yellow-100 rounded-xl shadow-xl py-5">
        <form action="">
          {/* titre 1 */}
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold text-red-700'>Titre 1</label>
            <input type="text" className='w-[500px] h-10 my-1 rounded-lg bg-white/30 border border-black'/>
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 1</label>
            <input type="text" className='w-[500px] h-10 my-1 mx-2 rounded-lg bg-white/30 border border-black'/>
          </div> 
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 2</label>
            <input type="text" className='w-[500px] h-10 my-1 mx-2 rounded-lg bg-white/30 border border-black'/>
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 3</label>
            <input type="text" className='w-[500px] h-10 my-1 mx-2 rounded-lg bg-white/30 border border-black'/>
          </div>
          {/* titre 2 */}
          <div className='flex justify-around mt-5'>
            <label htmlFor="" className='font-bold text-red-700'>Titre 2</label>
            <input type="text" className='w-[500px] h-10 my-1 rounded-lg bg-white/30 border border-black'/>
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 1</label>
            <input type="text" className='w-[500px] h-10 my-1 mx-2 rounded-lg bg-white/30 border border-black'/>
          </div> 
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 2</label>
            <input type="text" className='w-[500px] h-10 my-1 mx-2 rounded-lg bg-white/30 border border-black'/>
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 3</label>
            <input type="text" className='w-[500px] h-10 my-1 mx-2 rounded-lg bg-white/30 border border-black'/>
          </div>
          {/* titre 3 */}
          <div className='flex justify-around mt-5'>
            <label htmlFor="" className='font-bold text-red-700'>Titre 3</label>
            <input type="text" className='w-[500px] h-10 my-1 rounded-lg bg-white/30 border border-black'/>
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 1</label>
            <input type="text" className='w-[500px] h-10 m-1 rounded-lg bg-white/30 border border-black'/>
          </div> 
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 2</label>
            <input type="text" className='w-[500px] h-10 my-1 mx-2 rounded-lg bg-white/30 border border-black'/>
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 3</label>
            <input type="text" className='w-[500px] h-10 my-1 mx-2 rounded-lg bg-white/30 border border-black'/>
          </div>
        </form>
        <button className='border m-5 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'>Apercu</button>
      </div>
      <hr className='h-2 bg-black/30 m-5'/>
      <h3 className="text-center text-red-700 m-5 uppercase">Voir l'Historique des mises a jour</h3>
    </div>
  )
}

export default Conseil;