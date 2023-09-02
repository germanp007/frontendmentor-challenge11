interface DataType {
  title: string;
  description: string;
  class: string;
  icon: string;
}

const Card: React.FC<DataType> = ({ ...props }) => {
  return (
    <article
      className={`shadow-2xl w-[314px] h-[224px] bg-white m-auto px-[30px] pt-[35px] pb-[25px] flex flex-col justify-between rounded-lg border-t-[5px] ${props.class} `}
    >
      <div>
        <h1 className="text-left text-[20px] text-Very-Dark-Blue font-[800]">
          {props.title}
        </h1>
        <p className="text-left text-[13px] text-Grayish-Blue">
          {props.description}
        </p>
      </div>
      <div className="flex justify-end">
        <img src={props.icon} alt="lupa" className="h-[58px] w-[58px] " />
      </div>
    </article>
  );
};

export default Card;
