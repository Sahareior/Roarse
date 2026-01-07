import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "JAN", shipments: 450 },
  { month: "FEB", shipments: 720 },
  { month: "MAR", shipments: 620 },
  { month: "APR", shipments: 630 },
  { month: "MAY", shipments: 500 },
  { month: "JUN", shipments: 850 },
  { month: "JUL", shipments: 900 },
  { month: "AUG", shipments: 420 },
  { month: "SEP", shipments: 860 },
  { month: "OCT", shipments: 780 },
  { month: "NOV", shipments: 980 },
  { month: "DEC", shipments: 1040 },
];

const MonthWiseShipment = () => {
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
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <h2 className="text-xl arReg text-center ">Month wise shipment</h2>
        <span style={{ color: "#999" }}>2025</span>
      </div>

      <ResponsiveContainer className='pt-6' width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="shipments"
            fill="#6C63FF"
            radius={[6, 6, 0, 0]}
            barSize={24}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthWiseShipment;
