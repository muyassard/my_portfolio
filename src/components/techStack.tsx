export const TechStack: React.FC = () => {
  const tech = [
    './images/html.svg',
    './images/css.svg',
    './images/js.svg',
    './images/types.svg',
    './images/react.svg',
    './images/nextjs.svg',
    './images/postman.svg',
    './images/sass.svg',
    './images/bootstrap.svg',
    './images/tail.svg',
    './images/ant-design.svg',
    './images/mui.svg'
  ];

  return (
    <div id="myTechStack" className="section md:h-full flex flex-col justify-center   ">
      <div className="text-center font-bold text-4xl pb-10">My Tech Stack</div>
      <div className="flex items-center w-full  gap-16 md:flex-wrap">
        <div
          data-aos="zoom-in-right"
          className="w-[600px] leading-loose text-3xl text-indigo-400 font-bold"
        >
          My name is Muyassar <br /> I am 19 years old <br /> and I live in Tashkent
        </div>

        <div data-aos="zoom-in-left" className="flex w-[50%] items-center gap-5 flex-wrap">
          {tech.map(tech => {
            return <img src={tech} key={tech} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};
