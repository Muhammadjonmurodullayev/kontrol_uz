import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Yanvar', sales: 3000,
  },
  {
    name: 'Fevral', sales: 4000,
  },
  {
    name: 'Mart', sales: 2000,
  },
  {
    name: 'Aprel', sales: 5000,
  },
  {
    name: 'May', sales: 6000,
  },
];

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" barSize={30} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomBarChart;
