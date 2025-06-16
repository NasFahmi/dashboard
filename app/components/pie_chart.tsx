import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'DBL Bank', value: 400, color: '#4C78FF' },
  { name: 'ABM Bank', value: 300, color: '#16DBCC' },
  { name: 'BRC Bank', value: 300, color: '#FF82AC' },
  { name: 'MCP Bank', value: 200, color: '#FFBB38' },
];

export default function PieChartStatisitcs () {
    return (
      <div className="flex flex-col items-center">
        <PieChart width={400} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {/* ✅ Tooltip ditambahkan */}
          <Tooltip
            contentStyle={{ backgroundColor: 'white', borderRadius: '5px', border: '1px solid #ccc' }}
            formatter={(value: number, name: string) => [`${value}`, name]}
          />
        </PieChart>

        {/* Manual Legend */}
        <div className="grid grid-cols-2 mt-4 gap-x-4 gap-y-2">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="inline-block w-4 h-4 rounded-sm"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-gray-700">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
}
