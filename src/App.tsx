import Card from "./Card";
import lupa from "./assets/images/icon-supervisor.svg";
import team from "./assets/images/icon-team-builder.svg";
import karma from "./assets/images/icon-karma.svg";
import calculator from "./assets/images/icon-calculator.svg";

export interface dataType {
  title: string;
  description: string;
  class: string;
  icon: string;
}

const data: dataType[] = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    class: "border-t-Cyan col-span-1 row-span-2 order-1",
    icon: lupa,
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    class: "border-t-Red col-span-1 order-2",
    icon: team,
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    class: "border-t-Orange col-span-1 order-3 desktop:order-4",
    icon: karma,
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    class: "border-t-Blue col-span-1 row-span-2 order-4 desktop:order-3",
    icon: calculator,
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
              class={ele.class}
              icon={ele.icon}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
