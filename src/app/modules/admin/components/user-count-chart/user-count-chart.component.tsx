import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { USER_COUNT } from '../../shared/admin-home.const';

function UserCountChart() {
  return (
    <ResponsiveContainer width="90%" height={170} className="user-count-chart">
      <LineChart
        data={USER_COUNT}
        margin={{
          top: 5,
          right: 35,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: '#fff' }}
          stroke="#fff"
        />
        <YAxis axisLine={false} tick={{ fill: '#fff' }} stroke="#fff" />
        <Tooltip
          cursor={false}
          contentStyle={{
            color: 'white',
            backgroundColor: 'rgb(0, 0, 0, 0.7)',
            width: '150px',
            padding: '0px 5px',
          }}
        />
        <Legend />
        <Line
          legendType="none"
          type="monotone"
          dataKey="User"
          stroke="#fff"
          activeDot={{ r: 6 }}
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default React.memo(UserCountChart);
