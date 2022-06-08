import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { WEBSITE_VIEW } from '../../shared/admin-home.const';

function WebsiteViewChart() {
  return (
    <ResponsiveContainer
      width="90%"
      height={170}
      className="website-view-chart"
    >
      <BarChart
        data={WEBSITE_VIEW}
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
        <Bar legendType="none" dataKey="View" fill="#fff" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default React.memo(WebsiteViewChart);
