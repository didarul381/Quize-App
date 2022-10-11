import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Statics.css'
const Statics = () => {
    const data=useLoaderData().data;
    console.log(data)
    return (
        <div>
            <h1>Statics</h1>
           
            <BarChart width={350} height={400} data={data} >
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
       
            
        </div>
    );
};

export default Statics;