type Colors =
  | "border-t-Cyan"
  | "border-t-Red"
  | "border-t-Orange"
  | "border-t-Blue";

interface DataType {
  title: string;
  description: string;
  color: Colors;
  icon: string;
  col: string;
  order: string;
}

const Card: React.FC<DataType> = ({
  title,
  description,
  color,
  icon,
  col,
  order,
}) => {
  return (
    <article
      className={`shadow-2xl w-[314px] h-[224px] bg-white m-auto px-[30px] pt-[35px] pb-[25px] flex flex-col justify-between rounded-lg border-t-[5px] ${color} md:${col} md:${order}`}
    >
      <div>
        <h1 className="text-left text-[20px] text-Very-Dark-Blue font-[800]">
          {title}
        </h1>
        <p className="text-left text-[13px] text-Grayish-Blue">{description}</p>
      </div>
      <div className="flex justify-end">
        <img src={icon} alt="lupa" className="h-[58px] w-[58px] " />
      </div>
    </article>
  );
};

export default Card;
