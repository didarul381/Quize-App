import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeData from '../QuizeData/QuizeData';

const Topic = () => {
    const quizes=useLoaderData();
    const quizDatas=quizes.data.questions;
    //console.log(quizes.data)
    return (
         <div>
            <h1  className='text-center text-green-700 text-2xl m-6'>Quize OF :{quizes.data.name}</h1>
            <h1  className='text-center text-green-700 text-2xl m-6'>Total Question  :{quizes.data.total}</h1>
        <div className={`grid md:grid-cols-2 m-6`}>
           
            {
            quizDatas.map(quizData=><QuizeData key={quizData.id}quizData={quizData} ></QuizeData>)
           
            }
          
           
        </div>
        </div>
    );
};

export default Topic;
