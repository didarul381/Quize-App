import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const[open,setOpen]=useState(false)
    return (
        <div>
        
            <nav  className=' w-full  bg-slate-600'>
             <nav>
                 
               <div onClick={()=>setOpen(!open)}className=" h-6 w-6 md:hidden">
            {
                open?<XMarkIcon/> : <Bars3Icon/>
            }

         </div> 
             
                 <div className={` header flex flex-col md:flex-row justify-between p-3 w-full  bg-slate-600 text-yellow-300 absolute md:static ${open? 'top-6' : 'top-[-120px]'}`}>
                 <h1>Quize master</h1>
                 
               <div>
             
                 <ul>
                 <NavLink to='/' >Home</NavLink>
                   <NavLink to='/topic'></NavLink>
                   <NavLink to='/'>Topics</NavLink>
                   <NavLink to='/blog' >Blog</NavLink>
                   <NavLink to='/static'>Statics</NavLink>
                 </ul>
                  </div>
               </div>
                
                
                
                </nav>
                </nav>
        </div>
    );
}

export default Header;