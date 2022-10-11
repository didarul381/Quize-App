import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TopicData.css'
const TopicData = ({topic}) => {
    // console.log(topic)
    const{id,name,logo,total}=topic;
    const navigate=useNavigate()
    const handleNavigate=()=>{
         navigate(`/topic/${id}`)
    }
    return (
        <div className='border-solid border-2 border-indigo-600 m-1  bg-green-400 text-yellow-50'>
           <img src={logo} alt='' className='topic-img'></img> 
          <div className='flex  justify-between '>
           <div className='mb-2 '>
           <p className=''>Name:{name}</p>
          <p>Total Quize:{total}</p>
           </div>
           <button className='bg-blue-300 mx-2 mb-2'
            onClick={handleNavigate}
           
           >start Practics</button>
          </div>
        </div>
    );
};

export default TopicData;