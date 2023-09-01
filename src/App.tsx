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
}

const data: dataType[] = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    color: "border-t-Cyan",
    icon: lupa,
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    color: "border-t-Red",
    icon: team,
  },
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    color: "border-t-Orange",
    icon: karma,
  },
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    color: "border-t-Blue",
    icon: calculator,
  },
];

const App = () => {
  return (
    <main className="min-h-screen font-Poppins pb-10 bg-Very-Light-Gray shadow-lg shadow-cyan-500/50">
      <div className=" w-full h-[322px] flex flex-col justify-center items-center">
        <h1 className="text-[24px] font-[200] text-Very-Dark-Blue text-center">
          {" "}
          Reliable, efficient delivery
        </h1>
        <h1 className="text-[24px] font-[600] text-Very-Dark-Blue text-center mb-4">
          Powered by Technology
        </h1>
        <p className="text-[15px] text-Grayish-Blue text-center mx-10">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {data.map((ele) => {
          return (
            <Card
              title={ele.title}
              description={ele.description}
              color={ele.color}
              icon={ele.icon}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
