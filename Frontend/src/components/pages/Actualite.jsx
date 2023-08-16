import axios from 'axios';
import { useState , useEffect}from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { Navigate, useNavigate } from 'react-router-dom';


function Actualite() {
  // const [image, setImage] = useState("");
  const [titre, setTitre] = useState("");
  const [theme, setTheme] = useState("");
  const [themeSuite, setThemeSuite] = useState("");
  const Navigate = useNavigate("");
  // affichage des donnes de la base de donnee
  const [data, setData] = useState([])
  useEffect(()=>{
      fetch("http://localhost:8081/actualite")
      .then(res =>res.json())
      .then(data =>setData(data))
      .catch(err => console.log(err));
  }, )

  const handleSubmit = ()=>{
      // event.preventDefault();
      axios.post("http://localhost:8081/CreateActualite", {titre, theme, themeSuite})
      .then(res => {console.log(res);
        Navigate("/Actualite");
      })
      .catch(err => console.log(err)); 

  } 
   
  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8081/actualite/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
   }

   //upload image
   const [succes, setSucces] = useState(null);
   const [image, setImage] = useState({
    file: [],
    filepreview: null,
   });
   const handleInputChange = (event)=>{
      setImage({
        ...image,
        file:event.target.files[0],
        filepreview:URL.createObjectURL(event.target.files[0]),
      })
   }

   const submit = async () =>{
      const formdata = new FormData()
      formdata.append('avatar', image.file);

      axios.post("http://localhost:8081/imageupload", formdata,{
        headers: {"Content-Type": "multipart/form-data"}
      })
      .then(res=>{
        console.warn(res);
        if(res.data.success === 1){
          setSucces("L'image est ajouter avec succes")
        }
      })
   }

  return (
    <div className='text-center m-3 text-black h-screen'>
    <h3 className='uppercase font-bold text-xl text-white'>Actualites</h3>
    <div className="flex mb-2 bg-yellow-100 rounded-xl shadow-xl py-5">
      <div className="w-1/2">
      <h3 className=' mb-3 text-xl font-bold'>Publier votre actualite ici</h3>
      
      <form  onSubmit={handleSubmit} >
        <div className="m-3 flex justify-around">
          <label htmlFor="">Titre de la publication :</label>
          <input 
          type="text" 
          className=' h-10 m-1 rounded-lg bg-white/30 border px-3 border-black'
          value={titre}
          onChange={e=>setTitre(e.target.value)}
           />
        </div>
        <div className="m-3 flex justify-around">
          <label htmlFor="" className='ml-[100px]'>Theme :</label>
          <input 
          type="text"  
          className=' h-10 m-1 rounded-lg bg-white/30 border px-3 border-black'
          value={theme}
          onChange={e=>setTheme(e.target.value)}
          />
        </div>
        <div className="m-3 flex justify-around">
          <label htmlFor="" className='ml-[100px]'>lire la suite :</label>
          <input 
          type="text"  
          className=' h-10 m-1 rounded-lg bg-white/30 border px-3 border-black'
          value={themeSuite}
          onChange={e=>setThemeSuite(e.target.value)}
          />
        </div>
        <button className='border m-5 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'>Envoyer</button>
        </form>
      </div>
      <p className='bg-black w-0.5'></p>
      <div className="w-1/2">
        <form action="">
          <h3 className="mb-5 text-xl font-bold">Ajouter une image de fond a la publication</h3>
          <label htmlFor="" className=''>Selectionner une image :</label>
          <input 
            type="file" 
            className='my-5'
            name='image'
            onChange={handleInputChange}
            />
          <button 
            className='border m-5 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'
            onClick={()=>submit()}
            >Envoyer</button>
            {succes !== null ? <h4>{succes}</h4>: null}
        </form>
      </div>
      
    </div>
    <hr className='h-2 bg-black/30 '/>
      <h3 className="text-center text-red-700 m-2 uppercase">Voir l'Historique des mises a jour</h3>
      <div className='h-[30%] overflow-scroll'>
                {data.map((data, i)=>(
                    <div key={i} className='   bg-slate-500 '>
                        <div className='flex justify-between'>
                           <div className="flex px-10 space-x-5">
                            <p className='text-white'>Votre actualite a ete cree le :</p>
                                {/* <p className=' my-1  text-white'>{data.id}.</p>
                                <p className=' my-1  text-white'>{data.titre}.</p>
                                <p className=' my-1 text-white' id=''>{data.theme}</p>
                                <p className=' my-1 text-white' id=''>{data.themeSuite}</p> */}
                           </div>
                           <div className='space-x-5 mr-10 py-1'>
                           <Link to={`/readActu/${data.id}`} className='bg-green-500 text-white px-1 rounded'>Voir</Link>
                            <button className='bg-blue-500 text-white px-1 rounded'>MODIFFIER</button>
                            <button href="" onClick={()=>handleDelete(data.id)} className='bg-red-700 text-white px-1 rounded'>DELETE</button>
                           </div>
                        </div>
                        <hr className='w-full h-1 text-white'/>
                    </div>
                ))}
            </div>
            {
              image.filepreview !==null ?
              <img src={image.filepreview} alt="" />
              : null
            }
  </div>
  )
}

export default Actualite;