"use client"
import React from 'react';
import { circleData, radialData,data01, data02, radialBarData } from '@/data/data';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar,RadarChart,Legend,RadialBarChart,RadialBar } from 'recharts';

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};


const page = () => {
  return (
    <div className='analytic'>
      <div className="analytic-circle">
        <h1>Recent Stats</h1>
         <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={circleData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      </div>

      <div className="analytic-radial">
         <h1>All Stats</h1>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radialData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
      <div className="analytic-pie">
         <h1>Yearly Stats</h1>
          <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
      </div>

      <div className="analytic-radialbar">
         <h1>Every Stats</h1>
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={radialBarData}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default page