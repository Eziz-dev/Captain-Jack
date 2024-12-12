type CircleProps = {
  label?: string;
};

const RedCircle = ({ label }: CircleProps) => {
  return (
    <div className="font-montserrat text-white text-xs border-2 border-secondary flex flex-col justify-center items-center h-[70px] w-[70px] rounded-full bg-primary">
      <p>Формат:</p>
      <p className="font-bold">{label}</p>
    </div>
  );
};

export default RedCircle;
