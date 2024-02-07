"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function AdminChart() {
  const data = [
    {
      name: "5.2.",
      objednávek: 12,
    },
    {
      name: "6.2",
      objednávek: 15,
    },
    {
      name: "7.2.",
      objednávek: 17,
    },
    {
      name: "8.2.",
      objednávek: 8,
    },
    {
      name: "9.2.",
      objednávek: 0,
    },
    {
      name: "10.2.",
      objednávek: 0,
    },
    {
      name: "11.2.",
      objednávek: 0,
    },
  ]
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="text-xs lg:text-sm"
    >
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 0,
          right: 5,
          left: -30,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="objednávek" fill="#1c1c1c" />
      </BarChart>
    </ResponsiveContainer>
  )
}
