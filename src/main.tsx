import { useEffect } from 'react';

import { Anchor } from 'antd';
import { FaGithub, FaTelegramPlane, FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header, Projects, TechStack } from './components';

const Main: React.FC = () => {
  useEffect(() => {
    ///////////////////////
    AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }, []);

  return (
    <div className="pt-[.1px] ">
      <nav
        data-aos="zoom-in-down"
        id="#"
        className="fixed flex-wrap gap-5 shadow-md flex  py-5 px-16 md:px-5 z-50 w-full bg-white  items-center justify-center"
      >
        <div className="flex gap-2">
          <div
            className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-green-500
         to-indigo-400 inline-block bg-clip-text text-transparent"
          >
            muyassar
          </div>
          <img
            className="w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/127185125?v=4"
            alt="girl"
          />
        </div>

        <div className="flex items-center  gap-10">
          <a target="_blank" rel="noreferrer" type="tel" href="tel:+998903280938">
            <FaPhoneAlt className="text-2xl" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/muyassard">
            <FaGithub className="text-2xl" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/muyassar___19">
            <FaTwitter className="text-2xl" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/MDS328">
            <FaTelegramPlane className="text-2xl" />
          </a>
        </div>


        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'home',
              href: '#home',
              title: 'home'
            },
            {
              key: 'myTechStack',
              href: '#myTechStack',
              title: 'myTechStack'
            },

            {
              key: 'projects',
              href: '#projects',
              title: 'projects'
            }
          ]}
        />

      </nav>
      <div className="px-16 lg:px-5">
        <Header />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
};

export default Main;
