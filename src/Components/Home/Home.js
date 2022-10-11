import { TrophyIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicData from '../TopicData/TopicData';

const Home = () => {
    const topics=useLoaderData();
    const topicData=topics.data;
    // console.log(topics.data)
    return (
       <div className=' '>
       <div className=" h-8 w-8 ">
       <TrophyIcon  className='pt-6'></TrophyIcon>
       </div>

       <h1 className={`font-serif text-bold text-6xl text-center`}>Let's Test YourSelf!!!</h1>

         <div className='grid md:grid-cols-4 m-6 gap-2'>
            {
                topicData.map(topic=><TopicData key={topic.id} topic={topic}></TopicData>)
            }
        </div>
       </div>
    );
};

export default Home;