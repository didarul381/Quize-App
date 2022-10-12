import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import './QuestionData.css'
const QuizeData = ({quizData}) => {
     //console.log(quizData)
    const{ question,correctAnswer}=quizData
    const options=quizData.options
    
    
   //console.log(data)
    const notify = () => toast(correctAnswer);
    const chack=(id)=>{
        console.log((id));
     if(id===quizData.correctAnswer){
        toast("You are correct");
        
     }else{
        toast("You are Wrong");
     }

    }
    return (
        <div className='question-data bg-white'>
            {/* <h1>Quize name:{quizData}</h1> */}
            <div className={``}>
          <div> <p className='text-2xl '> { question}</p></div>
           <div  className='w-6 h-4  m-3'>
             <EyeIcon onClick={notify}></EyeIcon>
             <ToastContainer></ToastContainer>
             </div>
           </div>
           <div className={` question`}>
          <p><input type="radio"  name="language"  onClick={()=>chack(options[0])}  value={(options[0])}></input>
           <label for={options[0]}>{options[0]}</label></p> 
          <p> <input type="radio"  name="fav_language"   onClick={()=>chack(options[1])}value={ (options[1])}></input>
           <label for={options[1]}>{options[1]}</label></p>
           <p> <input type="radio"  name="fav_language"  onClick={()=>chack(options[2])} value={ (options[2])}></input>
           <label for={options[2]}>{options[2]}</label></p>
          <p> <input type="radio"  name="fav_language"  onClick={()=>chack(options[3])} value={(options[3])}></input>
           <label for={options[3]}>{options[3]}</label><br></br></p>
             
           </div>
        </div>
    );
};

export default QuizeData;