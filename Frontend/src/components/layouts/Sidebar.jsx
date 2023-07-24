/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { NavLink } from 'react-router-dom';


function Sidebar() {
    const SidebarMenu = [
        {
            path: "/Pageacueille",
            name: "Page d'acceuille"
        },

        {
            path: "/Conseil",
            name: "Conseils"
        },

        {
            path: "/Actualite",
            name: "Actualite"
        },

  
    ]

    const voirNewsletter = [
      {
        path: "/Newsletter",
        name: "Newsletter"
      }
    ]

    const activeLink = " hover:bg-white hover: px-10 hover: my-0 py-5 bg-red w-full "
    const normaLink = " hover:bg-white hover: px-10 hover: my-0 py-5  "

  return (
    <div className='space-y-5'>
        <h3 className="text-center text-red-700 m-5">METTEZ A JOUR LE SITE ICI</h3>
     {
        SidebarMenu.map((item, index)=>{
            return(
                <div key={index} className='hover:bg-white hover: px-10 hover: my-0 py-5 border-b-2 '>
                  <NavLink to={item.path} className={({isActive}) => isActive? activeLink: normaLink}>
                    <span className='text-xl text-center '>{item.name}</span>
                  </NavLink>
                </div>
            )
        })
     }
        <h3 className="text-center text-red-700 m-5">VOIR LE(S) ABONNE(E)(S) DU NEWSLETTER</h3>

        {
        voirNewsletter.map((item, index)=>{
            return(
                <div key={index} className='hover:bg-white hover: px-10 hover: my-0 py-5 border-b-2 '>
                  <NavLink to={item.path} className={({isActive}) => isActive? activeLink: normaLink}>
                    <span className='text-xl text-center '>{item.name}</span>
                  </NavLink>
                </div>
            )
        })
     }

    </div>
    
  )
}

export default Sidebar;