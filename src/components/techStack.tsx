import { Collapse } from 'antd';

const { Panel } = Collapse;

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
    './images/mui.svg',
    './images/vue.svg'
  ];

  return (
    <div id="myTechStack" className="section h-full flex flex-col justify-center">
      <div className="text-center font-bold text-4xl  py-[20%]">My Tech Stack</div>
      <div className="flex items-center w-full  gap-16 md:flex-col">
        <div className="w-[40%]" data-aos="zoom-in-right">
          <Collapse accordion>
            <Panel className="bg-green-100 rounded-lg" header="React js" key="1">
              <p>Deyarli barcha loyihalarim Reactda qilingan , react bilan ko'p ishlaganman</p>
            </Panel>
            <Panel className="bg-green-100 rounded-lg" header="Next js" key="2">
              <p>
                Next bilan kam ishlaganman , loyiha Next da qilinsa tezda mukammal o'rganib olaman
              </p>
            </Panel>
            <Panel className="bg-green-100 rounded-lg" header="Vue js" key="3">
              <p>Vue js ni hozirda o'rganyapman</p>
            </Panel>
          </Collapse>
        </div>
        <div data-aos="zoom-in-left" className="flex w-[50%] items-center justify-around gap-10 flex-wrap">
          {tech.map(tech => {
            return <img src={tech} key={tech} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};
