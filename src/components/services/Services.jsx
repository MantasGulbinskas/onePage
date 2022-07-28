import React from 'react';
import '../../scss/Services.scss'
export default function Services () {

  return (
<section>
    <div className='contents'>
      <header>
        <div className="icon">
          <i className='fa-solid fa-layer-group' />
        </div>
        <h4 className="title">Lorem Ipsum</h4>
      </header>
      <div className='text-content'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quia.</p>
      </div>
    </div>

  <div className='contents'>
   <header>
     <div className="icon">
       <i className='fa-solid fa-palette' />
     </div>
     <h4 className="title">Sed ut perspiciatis</h4>
   </header>
   <div className='text-content'>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>   </div>
 </div>
 <div className='contents'>
   <header>
     <div className="icon">
       <i className='fa-solid fa-draw-polygon' />
     </div>
     <h4 className="title">Magni Dolores</h4>
   </header>
   <div className='text-content'>
<p>Excepteru sint occaecat cupidatat non proident, sunt in culpa qui officia</p>   </div>
 </div>
      <div className='contents'>
        <header>
          <div className="icon">
            <i className='fa-solid fa-fingerprint' />
          </div>
          <h4 className="title">Nemo Enim</h4>
        </header>
        <div className='text-content'>
<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>        </div>
      </div>
</section>  )
}