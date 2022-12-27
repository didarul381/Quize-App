import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/UserContext';



const Header = () => {
   const {user, logOut}=useContext(AuthContext);

  // console.log(b);

     const handleSingOut=()=>{
      logOut()
      .then(()=>{

      })
      .catch(error=>{
        console.error(error);
      })
     }
    return (
        
           <div>
            <div className="navbar  bg-primary text-primary-content">
         <div className="flex-1">
       <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
       <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
       <Link className="btn btn-ghost normal-case text-xl" to='/login'>Loing in</Link>
       <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
       <Link className="btn btn-ghost normal-case text-xl" to='/orders'>orders</Link>
       {user?.email && <span>Wealcome,{user.email}</span>}
       <button onClick={handleSingOut} className='btn btn-sm'>Sing out</button>
      </div>
  
            </div> 
        </div>
    );
};

export default Header;