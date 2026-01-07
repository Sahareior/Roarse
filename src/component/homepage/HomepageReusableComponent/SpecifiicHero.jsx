import { InfoCards } from "./InfoCards";

const SpecifiicHero = () => {
  const infoCardData = [
    {
      value: "50K+",
      title: "Active Carriers",
    },
    {
      value: "30%",
      title: "Average Savings",
    },
    {
      value: "100+hrs",
      title: "Avg Response Time",
    },
    {
      value: "96%",
      title: "Tracking Accuracy",
    },
  ];

  return (
    <div>
      <div className="bg-[#EEEEEE] py-9 p-5 grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-4">
        {infoCardData.map((items) => (
          <InfoCards value={items.value} title={items.title} />
        ))}
      </div>
    </div>
  );
};

export default SpecifiicHero;
