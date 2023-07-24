import React from 'react'
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import ContenuPage from './ContenuPage';

function PagePrincipale() {
  return (
    <React.Fragment>
        {/*bar de navigation horizontale */}
        <section>
            <Header />
        </section>

        {/*bar de navigation verticale */}
        <section className='grid grid-cols-12 my-5'>
            <div className='col-span-3 h-full bg-[#C9FFFF] shadow-lg '>
                <Sidebar />
            </div>
            <div className='col-span-9 h-full bg-[#85f085] '>
                <ContenuPage />
            </div>
        </section>

    </React.Fragment>
  )
}

export default PagePrincipale;