import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2020", shipments: 220 },
  { year: "2021", shipments: 320 },
  { year: "2022", shipments: 940 },
  { year: "2023", shipments: 320 },
  { year: "2024", shipments: 560 },
  { year: "2025", shipments: 830 },
  { year: "2026", shipments: 640 },
];

const YearWiseShipment = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 350,
        background: "#fff",
        padding: 16,
        paddingBottom: 40,
        borderRadius: 8,
        boxShadow: "0 0 8px rgba(0,0,0,0.08)",
      }}
    >
      <h2 className="text-xl arReg" style={{ textAlign: "", marginBottom: 16 }}>
        Year wise shipment
      </h2>

      <ResponsiveContainer className='pt-6' width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="shipments"
            stroke="#00C4E8"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YearWiseShipment;
