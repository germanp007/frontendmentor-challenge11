import Card from "./Card";
import lupa from "./assets/images/icon-supervisor.svg";
import team from "./assets/images/icon-team-builder.svg";
import karma from "./assets/images/icon-karma.svg";
import calculator from "./assets/images/icon-calculator.svg";

export type Colors =
  | "border-t-Cyan"
  | "border-t-Red"
  | "border-t-Orange"
  | "border-t-Blue";

export interface dataType {
  title: string;
  description: string;
  color: Colors;
  icon: string;
  col: string;
}

const data: dataType[] = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    color: "border-t-Cyan",
    icon: lupa,
    col: "col-span-1 row-span-2 order-1",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    color: "border-t-Red",
    icon: team,
    col: "col-span-1 order-2",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    color: "border-t-Orange",
    icon: karma,
    col: "col-span-1 order-3 desktop:order-4",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    color: "border-t-Blue",
    icon: calculator,
    col: "col-span-1 row-span-2 order-4 desktop:order-3",
  },
];

const App = () => {
  return (
    <main className="min-h-screen font-Poppins pb-10 bg-Very-Light-Gray shadow-lg shadow-cyan-500/50">
      <div className=" w-full h-[322px] flex flex-col justify-center items-center">
        <h1 className="text-[24px] font-[200] text-Very-Dark-Blue text-center md:text-[36px]">
          {" "}
          Reliable, efficient delivery
        </h1>
        <h1 className="text-[24px] font-[600] text-Very-Dark-Blue text-center mb-4 md:text-[36px]">
          Powered by Technology
        </h1>
        <p className="text-[15px] text-Grayish-Blue text-center mx-10 md:text-[14px] md:w-[500px]">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="flex flex-col gap-6 desktop:grid desktop:grid-cols-3 desktop:w-[990px] lg:m-auto ">
        {data.map((ele, index) => {
          return (
            <Card
              key={index}
              title={ele.title}
              description={ele.description}
              color={ele.color}
              icon={ele.icon}
              col={ele.col}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
