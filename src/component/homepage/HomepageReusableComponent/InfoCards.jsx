export const InfoCards = ({ value, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="text-[24px] robMed">{value}</p>
      <p className="text-[16px] robReg">{title}</p>
    </div>
  );
};
